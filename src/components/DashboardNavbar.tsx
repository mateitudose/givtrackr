import {Button, Navbar, Spacer, Text} from "@nextui-org/react";
import Link from "next/link";
import {Logo} from "@/components/Logo";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/router";

export default function HomeNavbar() {
    const supabaseClient = createBrowserSupabaseClient();
    const router = useRouter();

    const handleLogout = async () => {
        await supabaseClient.auth.signOut();
        router.replace("/");
    }

    return (
        <Navbar isBordered variant="floating">
            <Navbar.Brand>
                <Logo/>
                <Spacer x={0.5}/>
                <Text b color="inherit" hideIn={"xs"}>
                    GivTrackr
                </Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link color="inherit" href="/dashboard/settings">
                    Setări
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto flat onPress={handleLogout}>
                        Deconectare
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}
