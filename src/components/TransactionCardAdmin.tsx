import {Transaction} from "@/interfaces/Transaction";
import {Button, Card, Col, Loading, Modal, Text} from "@nextui-org/react";
import {ChangeEvent, useEffect, useState} from "react";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";

export default function TransactionCardAdmin({transaction}: { transaction: Transaction }) {
    const [visible, setVisible] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false); // Added uploading state
    const supabase = createBrowserSupabaseClient();

    const uploadFileToBucket = async (file: File) => {
        const user = await supabase.auth.getUser();
        if (!user) {
            console.error("User not logged in");
            return;
        }
        const userid = user.data.user?.id;
        setUploading(true);
        const {
            data,
            error
        } = await supabase.storage.from("invoices").upload(`${userid}/${transaction.internalTransactionId}`, file, {upsert: true});
        if (error) {
            console.error("Error uploading file:", error);
        } else {
            console.log("File uploaded successfully:", data);
            setVisible(false);
        }
        setUploading(false);
    };

    const closeHandler = () => setVisible(false);

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setSelectedFile(file);
    };

    const handleUploadButtonClick = () => {
        if (selectedFile) {
            uploadFileToBucket(selectedFile);
        }
    };

    useEffect(() => {
        setSelectedFile(null);
    }, [visible]);

    return (
        <>
            <Card isPressable isHoverable onPress={() => setVisible(true)}>
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
                    <Col>
                        <Text id="modal-title" h4>
                            Adaugă o dovadă fiscală*
                        </Text>
                        <Text id="modal-subtitle" size={16}>
                            Poți adăuga o dovadă pentru justificarea plății
                        </Text>
                    </Col>
                </Modal.Header>
                <Modal.Body>
                    <input type="file" onChange={handleFileInputChange}/>
                    <Button onPress={handleUploadButtonClick} disabled={!selectedFile}>
                        {uploading ? <Loading type="points-opacity" color="currentColor"
                                              size="sm"/> : "Încarcă factura"}
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Col>
                    <Text id="modal-footer" size={14}>
                        Prin încărcarea unei facturi, iau la cunoștință că aceasta va fi disponibilă pentru vizualizare
                        de către orice potențial donator
                    </Text>
                    <Text id="modal-footer" size={14}>
                       *Dovada fiscală poate fi reprezentată de o factură, un bon fiscal sau o chitanță (PDF, JPG, PNG)
                    </Text>
                    </Col>
                </Modal.Footer>
            </Modal>
        </>
    );
}
