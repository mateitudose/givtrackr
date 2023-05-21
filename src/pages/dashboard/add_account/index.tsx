import {Container, Grid, Image, Spacer, Text} from "@nextui-org/react";
import AddAccountButton from "@/components/AddAccountButton";
import {useEffect, useState} from "react";
import {BankData} from "@/interfaces/BankData";


export default function AddAccountPage() {
    const [banks, setBanks] = useState<BankData[]>([]);

    useEffect(() => {
        fetch("/api/get_available_banks").then((response) => {
            response.json().then((data) => {
                setBanks(data);
                console.log(data);
            });
        });
    }, []);

    return (
        <Container fluid css={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            maxWidth: "100vw"
        }}>
            <Spacer y={4}/>
            <Image src={"/givtrackr.png"} width={"$20"} alt={"GivTrackr Logo"} objectFit={"cover"}/>
            <Text h1>Adaugă un cont bancar</Text>
            <Text>Selectează una din băncile de mai jos la care GivTrackr se poate conecta:</Text>
            <Spacer y={2}/>
            <Grid.Container gap={2} justify={"center"}>
                {banks.map((bank) => (
                    <Grid key={bank.id} xs={6} sm={4} lg={2.5}>
                        <AddAccountButton bank={bank}/>
                    </Grid>
                ))}
            </Grid.Container>
        </Container>
    );
}
