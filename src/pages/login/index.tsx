import {Button, Card, Col, Grid, Image, Input, Spacer, Text} from "@nextui-org/react";

export default function Login() {
    return (
        <Grid.Container direction={"row"} gap={0} css={{height: "100vh"}}>
            <Grid xs={12} sm={6} justify={"center"} alignItems={"center"} alignContent={"center"}>
                <Card css={{
                    width: "95%", '@xs': {
                        width: "70%"
                    }
                }}>
                    < Spacer y={1}/>
                    <Card.Header css={{textAlign: "center", flexDirection: "column", padding: 40}}>
                        <Image src={"/givtrackr.png"} width={"$20"} alt={"GivTrackr Logo"}/>
                        <Text h1>Conectează-te</Text>
                        <Text>Conectează-te acum în cont pentru a gestiona tranzacțiile ONG-ului tău!</Text>
                    </Card.Header>
                    <Card.Body>
                        <Grid.Container direction={"column"} gap={1} justify={"center"} alignItems={"center"}>
                            <Grid css={{width: "80%"}}>
                                <Text>Email</Text>
                                <Input placeholder={"hello@asociatiahope.ro"} width={"100%"}/>
                            </Grid>
                            <Grid css={{width: "80%"}}>
                                <Text>Parolă</Text>
                                <Input width={"100%"} type={"password"}/>
                            </Grid>
                        </Grid.Container>
                    </Card.Body>
                    <Card.Footer>
                        <Col css={{
                            justifyContent: "center",
                            display: "flex",
                            flexDirection: "column",
                            textAlign: "center",
                            padding: 40
                        }}>
                            <Text>Nu ai cont?<a href={"/signup"}> Creează cont</a></Text>
                            <Spacer y={0.5}/>
                            <Button color={"primary"}>Conectare</Button>
                        </Col>
                    </Card.Footer>
                    <Spacer y={1}/>
                </Card>
            </Grid>
            <Grid xs={0} sm={6} justify={"center"} alignItems={"center"} alignContent={"center"}
                  css={{backgroundColor: "blue"}}>
                <Image src={"https://kolakariola.ro/img/landing-page/hero-image-mobile.jpg"} width={"100%"}
                       css={{height: "100vh", minHeight: 950}} objectFit={"cover"} alt={"Side Image"}/>
            </Grid>
        </Grid.Container>
    )
        ;
}
