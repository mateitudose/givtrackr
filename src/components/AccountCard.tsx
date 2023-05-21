import {Card, Text, Row, Image, Col, Spacer} from "@nextui-org/react";
import {useEffect, useState} from "react";

export default function AccountCard() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 650px)");
        setIsSmallScreen(mediaQuery.matches);
        const listener = () => setIsSmallScreen(mediaQuery.matches);
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);

    return (
        <Card isPressable isHoverable css={{maxWidth: 800}}>
            <Card.Body>
                <Row css={{alignItems: "center", justifyContent:"center"}}>
                    <Spacer x={1}/>
                    {!isSmallScreen && (
                        <>
                            <Spacer x={1}/>
                            <Image
                                src={"https://cdn.nordigen.com/ais/UNICREDIT_UNCRITMM.png"}
                                width={110}
                                alt={"GivTrackr Logo"}
                                objectFit={"cover"}
                            />
                            <Spacer x={2}/>
                        </>
                    )}
                    <Col css={{justifyContent: "center"}}>
                        <Text h4 css={{margin: 0}}>
                            Unicredit Bank
                        </Text>
                        <Text>RO04 BACX 0000 0021 3379 8000</Text>
                        <Text>▸ Apasă pentru a vedea lista de tranzacții</Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}
