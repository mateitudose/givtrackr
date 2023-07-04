import {useRouter} from "next/router";
import {Container, Grid, Image, Loading, Spacer, Text} from "@nextui-org/react";
import TransactionCardAdmin from "@/components/TransactionCardAdmin";
import {useEffect, useState} from "react";
import {Transaction} from "@/interfaces/Transaction";

export default function TransactionsPage() {
    const router = useRouter();
    const {account_id} = router.query;
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (account_id === undefined && router.isReady) {
            router.replace("/dashboard");
        } else if (account_id !== undefined) {
            fetch("/api/get_transactions", {
                method: "POST",
                body: JSON.stringify({
                    account_id: account_id
                })
            }).then((response) => {
                if (!response.ok) {
                    router.replace("/dashboard");
                    return;
                }
                response.json().then((data) => {
                    setTransactions(data["transactions"]);
                    setLoading(false);
                });
            });
        }
    }, [account_id]);

    return (
        <Container fluid css={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            maxWidth: "100vw"
        }}>
            <Spacer y={2}/>
            <Image src={"/givtrackr.png"} width={"$20"} alt={"GivTrackr Logo"} objectFit={"cover"}/>
            <Text h1>Tranzacții</Text>
            <Text>În ultimele 90 de zile, ONG-ul a făcut plăți către următoarele entități:</Text>
            <Spacer y={2}/>
            <Grid.Container gap={2} justify={"center"}>
                {loading ? (
                    <Loading/>
                ) : transactions.length === 0 ? (
                    <Text>Nicio tranzacție efectuată din acest cont!</Text>
                ) : (
                    transactions.map((transaction) => (
                        <Grid xs={12} sm={6} md={6} lg={4} key={transaction.internalTransactionId}>
                            <TransactionCardAdmin
                                transaction={transaction}
                            />
                        </Grid>
                    ))
                )}
            </Grid.Container>
        </Container>
    );
}
