import {Button, Navbar, Spacer, Text} from "@nextui-org/react";
import Link from "next/link";
import {Logo} from "@/components/Logo";

export default function NavbarComponent() {
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
                <Navbar.Link color="inherit" href="/login">
                    Conectare
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto flat as={Link} href="/signup">
                        Creare cont
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}
