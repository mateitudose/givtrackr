import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {User} from "@supabase/auth-helpers-react";
import {Button, Col, Container, Image, Spacer, Text} from "@nextui-org/react";
import DashboardNavbar from "@/components/DashboardNavbar";
import {Profile} from "@/interfaces/Profile";
import AccountCard from "@/components/AccountCard";
import Link from "next/link";
import {BankAccountData} from "@/interfaces/BankAccountData";

export default function Dashboard() {
    const supabaseClient = createBrowserSupabaseClient();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [accounts, setAccounts] = useState<BankAccountData[]>([]);
    const router = useRouter();
    const {ref} = router.query;

    useEffect(() => {
        async function setUserProfile() {
            const response = await supabaseClient.auth.getUser();
            if (response.data.user?.id === undefined) {
                router.replace("/");
                return;
            }
            setUser(response.data.user);

            async function fetchUserProfile() {
                const {
                    data,
                    error
                } = await supabaseClient.from("users").select('name, profile_photo').eq("id", response.data.user?.id);
                if (error) {
                    console.error(error);
                    return;
                }
                setProfile(data[0]);
            }

            fetchUserProfile().then(async () => {
                setLoading(false);
                if (ref) {
                    fetch("/api/add_bank_account", {
                        method: "POST",
                        body: JSON.stringify({
                            requisition_id: ref,
                        })
                    }).then((response) => {
                        if (response.ok) {
                            router.replace("/dashboard");
                        }
                    });
                } else {
                    const {
                        data,
                        error
                    } = await supabaseClient.from("bank_accounts").select("*").eq("owned_by", response.data.user?.id);
                    if (error) {
                        console.error(error);
                        return;
                    }
                    let bankAccountsArray: BankAccountData[] = [];
                    for (const account of data) {
                        bankAccountsArray.push({
                            nordigen_id: account.nordigen_id,
                            bank_id: account.id,
                            bank_name: account.bank_name,
                            bank_logo: account.bank_logo,
                            iban: account.iban,
                        });
                    }
                    setAccounts(bankAccountsArray);
                }
            });
        }

        setUserProfile();
    }, [ref]);


    if (loading) {
        return <div></div>;
    }

    return (
        <Container fluid css={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            padding: 0,
            maxWidth: "100vw"
        }}>
            <DashboardNavbar/>
            <Spacer y={2}/>
            <Image src={"/givtrackr.png"} width={"$20"} alt={"GivTrackr Logo"} objectFit={"cover"}/>
            <Text h1>Bun venit!</Text>
            <Text h4>{profile?.name}</Text>
            <Spacer y={2}/>
            <Col css={{maxWidth: 800, padding: "$7"}}>
                <Text h3 css={{textAlign: "left"}}>Conturi bancare</Text>
                {accounts.map((account) => {
                        return (
                            <>
                                <AccountCard account={account}/>
                                <Spacer y={1}/>
                            </>
                        );
                    }
                )}
                <Spacer y={1}/>
                <Button css={{width: "100%"}} as={Link} href={"/dashboard/add_account"}>Adaugă cont bancar</Button>
            </Col>
            <Spacer y={5}/>
        </Container>
    );
}
