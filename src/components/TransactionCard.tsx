import {Transaction} from "@/interfaces/Transaction";
import {Card, Col, Text} from "@nextui-org/react";

export default function TransactionCard({transaction}: { transaction: Transaction }) {
    return (
        <Card isPressable isHoverable css={{maxWidth: 800}}>
            <Card.Body>
                    <Col css={{justifyContent: "center"}}>
                        <Text h4 css={{margin: 0}}>
                            {transaction.creditorName == undefined ? "Plată cu cardul asociat contului" : "Plată către " + transaction.creditorName}
                        </Text>
                        <Text>Sumă: {transaction.transactionAmount.amount} {transaction.transactionAmount.currency}</Text>
                        <Text>Dată: {transaction.bookingDate}</Text>
                        <Text>Motiv: {transaction.remittanceInformationUnstructured == undefined ? "Nespecificat în referința OP" : transaction.remittanceInformationUnstructured}</Text>
                        <Text>▸ Apasă pentru a vedea alte detalii</Text>
                    </Col>
            </Card.Body>
        </Card>
    );
}
