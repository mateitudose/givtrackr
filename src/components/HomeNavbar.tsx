import {Button, Navbar, Spacer, Text} from "@nextui-org/react";
import Link from "next/link";
import {Logo} from "@/components/Logo";
import {useEffect, useState} from "react";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {User} from "@supabase/auth-helpers-react";

export default function HomeNavbar() {
    const supabaseClient = createBrowserSupabaseClient();
    const [user, setUser] = useState<User | null>(null);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        async function fetchUser() {
            const { data: user, error } = await supabaseClient.auth.getUser();
            if (user) {
                setUser(user.user);
                setLoggedIn(true);
            }
            else if (error) {
                console.log(error);
            }
        }
        fetchUser();
    }, []);

    return (
        <Navbar isBordered variant="floating">
            <Navbar.Brand>
                <Logo/>
                <Spacer x={0.5}/>
                <Text b color="inherit" hideIn={"xs"}> GivTrackr </Text>
            </Navbar.Brand>
            <Navbar.Content>
                {loggedIn ? (
                    <>
                        <Navbar.Item>
                            <Button auto flat as={Link} href="/dashboard">
                                Panou de control
                            </Button>
                        </Navbar.Item>
                    </>
                ) : (
                    <>
                        <Navbar.Link color="inherit" href="/login">
                            Conectare
                        </Navbar.Link>
                        <Navbar.Item>
                            <Button auto flat as={Link} href="/signup">
                                Creare cont
                            </Button>
                        </Navbar.Item>
                    </>
                )}
            </Navbar.Content>
        </Navbar>
    );
}
