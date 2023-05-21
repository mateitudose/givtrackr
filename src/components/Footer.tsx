import {Col, Container, Text} from "@nextui-org/react";


export default function Footer(){
    return (
        <Container css={{textAlign: "center", padding: 0, minWidth: "100vw"}}>
            <Col css={{backgroundColor: "#cee4fe", paddingTop: "$9"}}>
                <Text h6>Proiect realizat cu ♥ de Matei Tudose</Text>
            </Col>
        </Container>
    );
}
