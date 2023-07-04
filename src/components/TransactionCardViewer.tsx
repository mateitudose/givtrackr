import {Transaction} from "@/interfaces/Transaction";
import {useState} from "react";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {Button, Card, Col, Loading, Modal, Text} from "@nextui-org/react";
import {useRouter} from "next/router";

export default function TransactionCardViewer({transaction}: { transaction: Transaction }) {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [existingInvoice, setExistingInvoice] = useState(false);
    const supabase = createBrowserSupabaseClient();
    const router = useRouter();
    const {id} = router.query;

    const openHandler = async () => {
        setVisible(true);
        const {
            data,
            error
        } = await supabase.storage.from("invoices").list(`${id}`, {search: `${transaction.internalTransactionId}`});
        if (error) {
            console.error("Error fetching file:", error);
        } else if (data && data.length > 0) {
            console.log("File fetched successfully:", data);
            setExistingInvoice(true);
            setLoading(false);
        } else {
            console.log("No file found");
            setLoading(false);
        }
    }

    const closeHandler = () => setVisible(false);

    const downloadInvoice = async () => {
        const { data } = supabase
            .storage
            .from('invoices')
            .getPublicUrl(`${id}/${transaction.internalTransactionId}`, {
                download: true,
            })
        window.open(data?.publicUrl, "_blank");
    }

    return (
        <>
            <Card isPressable isHoverable onPress={() => openHandler()}>
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
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
                preventClose
            >
                <Modal.Header>
                    {loading ? <Text>Se încarcă...</Text> : existingInvoice ?
                        <Col><Text h4>Vizualizează factura</Text><Text>Poți descărca factura pentru a vedea exact pentru ce
                            a fost efectuată plata</Text></Col> : <Text h4>Factura lipsă!</Text>}
                </Modal.Header>
                <Modal.Body>
                    {loading ? <Loading/> : existingInvoice ? <Button auto onPress={() => downloadInvoice()}>Descarcă factura</Button> :
                        <Text css={{textAlign: "center"}}>ONG-ul nu a încarcat încă o factură pentru această tranzacție!</Text>}
                </Modal.Body>
                <Modal.Footer>
                    {loading ? null : <Col css={{margin:0}}><Text css={{textAlign:"center"}} size={12}>ID: {transaction.internalTransactionId}</Text></Col>}
                </Modal.Footer>
            </Modal>
        </>
    );
}
