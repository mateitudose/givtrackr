import {useRouter} from "next/router";
import {Col, Container, Image, Loading, Spacer, Text} from "@nextui-org/react";
import TransactionCard from "@/components/TransactionCard";
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
            padding: 0,
            maxWidth: "100vw"
        }}>
            <Spacer y={2}/>
            <Image src={"/givtrackr.png"} width={"$20"} alt={"GivTrackr Logo"} objectFit={"cover"}/>
            <Text h1>Tranzacții</Text>
            <Text>În ultimele 90 de zile, ONG-ul a făcut plăți către următoarele entități:</Text>
            <Spacer y={2}/>
            <Col css={{maxWidth: 800, padding: "$7"}}>
                {loading ? <Loading/> : transactions.map((transaction) => (
                    <>
                        <Spacer y={1}/>
                        <TransactionCard key={transaction.internalTransactionId} transaction={transaction}/>
                    </>
                ))}
            </Col>
        </Container>
    );
}
