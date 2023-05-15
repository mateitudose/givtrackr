import {Box} from "@/styles/Box";
import NavbarComponent from "@/components/Navbar";
import {Card, Col, Grid, Spacer, Text} from "@nextui-org/react";
import {Flex} from "@/styles/Flex";

export default function Home() {
    return (
        <Box css={{overflow: "hidden", width: '100%'}}>
            <NavbarComponent/>
            <Spacer y={2}/>
            <Box css={{textAlign: "center", padding: "$6"}}>
                <Text h1>GivTrackr</Text>
                <Text css={{padding: "0 $9 0 $9"}}>Găsește ONG-uri de încredere și urmărește cum sunt folosite fondurile
                    donați</Text>
            </Box>
            <Grid.Container gap={3} justify={'center'} alignItems={"center"} alignContent={"center"}
                            css={{padding: "$12"}}>
                <Grid xs={12} sm={5.5} md={3.5} justify={"center"}>
                    <Card isPressable isHoverable>
                        <Card.Header css={{position: "absolute", zIndex: 1, top: 5}}>
                            <Col>
                                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                    Asociația "Kola Kariola"
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
                                    Asociația pentru Protecția Animalelor "Hope"
                                </Text>
                                <Text h4 color="white">
                                    Donează pentru pisicile fără stăpân!
                                </Text>
                            </Col>
                        </Card.Header>
                        <Card.Image
                            src="https://scontent.fcnd1-1.fna.fbcdn.net/v/t39.30808-6/310651188_410249367975805_6878298329579991176_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=hupnXZ0RPEsAX9GHwUg&_nc_ht=scontent.fcnd1-1.fna&oh=00_AfDjnuMXfwj-Qi3JArpdC4ccdUt_G6_J3GHpSQioyEsvRA&oe=6464DD7C"
                            objectFit="cover"
                            width="100%"
                            height={340}
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
            </Grid.Container>
            <Box css={{textAlign: "center", padding: "$6"}}>
                <Text h1>Ce face GivTrackr?</Text>
                <Text css={{padding: "0 $9 0 $9"}}>GivTrackr permite oricărui ONG să transparentizeze
                    ieșirile din conturile bancare
                    pentru a oferi donatorilor o perspectivă largă asupra felului în care sunt folosiți banii
                    donați.</Text>
                <Spacer y={1}/>
                <Text css={{padding: "0 $9 0 $9"}}>Pentru a monitoriza ieșirile din contul bancar al ONG-ului, folosim
                    Open
                    Banking pentru a ne conecta la conturi și pentru a supraveghea tranzacțiile.</Text>
            </Box>
            <Spacer y={4}/>
            <Flex css={{textAlign: "center"}}>
                <Col css={{backgroundColor: "#cee4fe", paddingTop: "$9"}}>
                    <Text h6>Proiect realizat cu ♥ de Matei Tudose</Text>
                </Col>
            </Flex>
        </Box>
    )
}
