import NavbarComponent from "@/components/Navbar";
import {Card, Col, Container, Grid, Spacer, Text} from "@nextui-org/react";

export default function Home() {
    return (
        <Container fluid css={{padding: 0}}>
            <NavbarComponent/>
            <Spacer y={2}/>
            <Container css={{textAlign: "center", padding: "$6"}}>
                <Text h1>GivTrackr</Text>
                <Text css={{padding: "0 $9 0 $9"}}>Găsește ONG-uri de încredere și urmărește cum sunt folosite fondurile
                    donați</Text>
            </Container>
            <Grid.Container gap={3} justify={'center'} alignItems={"center"} alignContent={"center"}
                            css={{padding: "$12"}}>
                <Grid xs={12} sm={5.5} md={3.5} justify={"center"}>
                    <Card isPressable isHoverable>
                        <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Asociația &quot;Kola Kariola&quot;
                                </Text>
                                <Text h4 color="white">
                                    Salvează un cățel astăzi!
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://kolakariola.ro/img/landing-page/hero-image-mobile.jpg"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
                <Grid xs={12} sm={5.5} md={3.5} justify={"center"}>
                    <Card isPressable isHoverable>
                        <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Salvați Copiii!
                                </Text>
                                <Text h4 color="white">
                                    Donează pentru copiii din România!
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://www.salvaticopiii.ro/sci-ro/thumbs/2e47d572-ce51-43dd-9cb4-2ba03963269e-720x405.jpg"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
                <Grid xs={12} sm={11} md={3.5} justify={"center"}>
                    <Card isPressable isHoverable>
                        <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Asociația pentru Protecția Animalelor &quot;Hope&quot;
                                </Text>
                                <Text h4 color="white">
                                    Donează pentru pisicile fără stăpân!
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://static.wixstatic.com/media/23c494_d7cb854fe2954ff79ae632976fc674d3~mv2.jpg/v1/fill/w_394,h_219,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/23c494_d7cb854fe2954ff79ae632976fc674d3~mv2.jpg"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
            </Grid.Container>
            <Container css={{textAlign: "center", padding: "$6"}}>
                <Text h1>Ce face GivTrackr?</Text>
                <Text css={{padding: "0 $9 0 $9"}}>GivTrackr permite oricărui ONG să transparentizeze
                    ieșirile din conturile bancare
                    pentru a oferi donatorilor o perspectivă largă asupra felului în care sunt folosiți banii
                    donați.</Text>
                <Spacer y={1}/>
                <Text css={{padding: "0 $9 0 $9"}}>Pentru a monitoriza ieșirile din contul bancar al ONG-ului, folosim
                    Open
                    Banking pentru a ne conecta la conturi și pentru a supraveghea tranzacțiile.</Text>
            </Container>
            <Spacer y={4}/>
            <Container fluid css={{textAlign: "center", padding: 0}}>
                <Col css={{backgroundColor: "#cee4fe", paddingTop: "$9"}}>
                    <Text h6>Proiect realizat cu ♥ de Matei Tudose</Text>
                </Col>
            </Container>
        </Container>
    )
}
