import {Card, Image, Text} from "@nextui-org/react";
import {BankData} from "@/interfaces/BankData";
import {redirect} from "next/navigation";

export default function AddAccountButton({bank}: { bank: BankData }) {
    const getConsent = async () => {
        fetch("/api/get_consent_link", {
            method: "POST",
            body: JSON.stringify({
                institution_id: bank.id,
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    redirect(data.url);
                });
            } else {
                console.error(response);
            }
        });
    };

    return (
        <Card isPressable isHoverable onPress={getConsent}>
            <Card.Body css={{textAlign: "center", justifyContent: "center"}}>
                <Image src={bank.logo} alt={`${bank.name} Logo`} css={{maxWidth: 100}} objectFit={"cover"}/>
                <Text h4>{bank.name}</Text>
            </Card.Body>
        </Card>
    );
}
