import {Card, Text, Row, Image, Col, Spacer, Link} from "@nextui-org/react";
import {useEffect, useState} from "react";
import {BankAccountData} from "@/interfaces/BankAccountData";
import {useRouter} from "next/router";

export default function AccountCard({account, context, id}: {
    account: BankAccountData,
    context: string,
    id?: string
}) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 650px)");
        setIsSmallScreen(mediaQuery.matches);
        const listener = () => setIsSmallScreen(mediaQuery.matches);
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);

    const handleRedirect = () => {
        if (context === "dashboard")
            router.push(`/dashboard/${account.nordigen_id}`)
        else if (context === "donate")
            router.push(`/donate/${id}/${account.nordigen_id}`)
    }

    return (
        <Card isPressable isHoverable css={{maxWidth: 800}} onPress={handleRedirect}>
            <Card.Body>
                <Row css={{alignItems: "center", justifyContent: "center"}}>
                    <Spacer x={1}/>
                    {!isSmallScreen && (
                        <>
                            <Spacer x={1}/>
                            <Image
                                src={account.bank_logo}
                                width={110}
                                alt={"GivTrackr Logo"}
                                objectFit={"cover"}
                            />
                            <Spacer x={2}/>
                        </>
                    )}
                    <Col css={{justifyContent: "center"}}>
                        <Text h4 css={{margin: 0}}>
                            {account.bank_name}
                        </Text>
                        <Text>{account.iban}</Text>
                        <Text>▸ Apasă pentru a vedea lista de tranzacții</Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
