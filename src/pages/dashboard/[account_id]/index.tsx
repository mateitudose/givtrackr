import {useRouter} from "next/router";
import {Container, Image, Spacer, Text} from "@nextui-org/react";


export default function TransactionsPage() {
    const router = useRouter();
    const {account_id} = router.query;

    return (
        <Container fluid css={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            padding: 0,
            maxWidth: "100vw"
        }}>
            <Spacer y={2}/>
            <Image src={"/givtrackr.png"} width={"$20"} alt={"GivTrackr Logo"} objectFit={"cover"}/>
            <Text h1>Tranzacții</Text>
        </Container>
    );
}
