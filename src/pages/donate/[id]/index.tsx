import {useRouter} from "next/router";
import {Button, Col, Container, Grid, Image, Row, Spacer, Spinner, Text} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {BankAccountData} from "@/interfaces/BankAccountData";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {Profile} from "@/interfaces/Profile";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import AccountCard from "@/components/AccountCard";
import Link from "next/link";
import Footer from "@/components/Footer";


export default function DonatePage() {
    const router = useRouter();
    const {id} = router.query;
    const supabaseClient = createBrowserSupabaseClient();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [profileLoading, setProfileLoading] = useState(true);
    const [accounts, setAccounts] = useState<BankAccountData[]>([]);
    const [accountsLoading, setAccountsLoading] = useState(true);

    useEffect(() => {
        async function fetchUserProfile() {
            const {
                data,
                error
            } = await supabaseClient.from("users").select('id, name, profile_photo, email, description').eq("id", id);
            if (error) {
                console.error(error);
                router.replace("/");
                return;
            }
            setProfile(data[0]);
        }

        async function fetchBankAccounts() {
            const {
                data,
                error
            } = await supabaseClient.from("bank_accounts").select("*").eq("owned_by", id);
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

        if (router.isReady) {
            fetchUserProfile().then(async () => {
                setProfileLoading(false);
                fetchBankAccounts().then(() => {
                    setAccountsLoading(false);
                });
            });
        }

    }, [id]);

    if (profileLoading) {
        return <Container fluid css={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            maxWidth: "100vw"
        }}>
            <Spinner size={"xl"}/>
        </Container>
    }

    return (
        <Container fluid css={{
            padding: 0, display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            maxWidth: "100vw"
        }}>
            <Container fluid css={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                maxWidth: "100vw"
            }}>
                <Spacer y={2}/>
                <Image src={"/givtrackr.png"} width={"$20"} alt={"GivTrackr Logo"} objectFit={"cover"}/>
                <Text h1>Donează</Text>
                <Text h3 css={{margin: 0}}>{profile?.name}</Text>
                <Text>Contact: <a href={`mailto:${profile?.email}`}>{profile?.email}</a></Text>
                <Spacer y={4}/>
                <Grid.Container gap={2} justify={"center"}>
                    <Grid xs={12} sm={6} md={6} lg={4}>
                        <Image
                            src={profile?.profile_photo ?? "https://rdbnqesfrqfromjoojeg.supabase.co/storage/v1/object/public/profile_photos/public/default/default-user-image.png"}
                            alt={"ONG Profile Photo"} objectFit={"cover"}/>
                    </Grid>
                    <Grid xs={12} sm={6} md={6} lg={4} css={{alignItems: "center"}}>
                        <Text h4>{profile?.description}</Text>
                    </Grid>
                </Grid.Container>
                <Spacer y={4}/>
                <Text h3>Vrei să vezi unde se duc banii donați?</Text>
                <Text h3>Apasă pe contul bancar al ONG-ului și vezi cum sunt cheltuiți banii donați</Text>
                <Spacer y={1}/>
                <Col css={{maxWidth: 800, padding: "$7"}}>
                    {accounts.map((account) => {
                            return (
                                <>
                                    <AccountCard account={account} context={"donate"} id={id as string}/>
                                    <Spacer y={1}/>
                                </>
                            );
                        }
                    )}
                    <Spacer y={1}/>
                </Col>
                <Spacer y={2}/>
                <Text h3>Vrei să contribui?</Text>
                <Text h3>Poți trimite RON în orice cont IBAN din lista de mai sus</Text>
                <Text
                    h1
                    size={30}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 100%",
                    }}
                    weight="bold"
                >
                    Îți mulțumim!
                </Text>
            </Container>
            <Spacer y={4}/>
            <Footer/>
        </Container>
    );
}
