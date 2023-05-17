import {Button, Card, Col, Grid, Image, Input, Spacer, Text} from "@nextui-org/react";

export default function Signup() {
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
                        <Text h1>Înregistrare</Text>
                        <Text>Creează un cont pentru ONG-ul tău și bucură-te de încrederea sporită a donatorilor
                            tăi!</Text>
                    </Card.Header>
                    <Card.Body>
                        <Grid.Container direction={"column"} gap={1} justify={"center"} alignItems={"center"}>
                            <Grid css={{width: "80%"}}>
                                <Text> Nume ONG</Text>
                                <Input placeholder={"Asociația Hope"} width={"100%"}/>
                            </Grid>
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
                            <Text>Ai deja un cont?<a href={"/login"}> Autentificare</a></Text>
                            <Spacer y={0.5}/>
                            <Button color={"primary"}>Înregistrare</Button>
                        </Col>
                    </Card.Footer>
                    <Spacer y={1}/>
                </Card>
            </Grid>
            <Grid xs={0} sm={6} justify={"center"} alignItems={"center"} alignContent={"center"}
                  css={{backgroundColor: "blue"}}>
                <Image src={"https://kolakariola.ro/img/landing-page/hero-image-mobile.jpg"} width={"100%"}
                       css={{height: "100vh", minHeight: 950}} objectFit={"cover"} alt={"Side Image"} showSkeleton maxDelay={3000}/>
            </Grid>
        </Grid.Container>
    )
        ;
}
