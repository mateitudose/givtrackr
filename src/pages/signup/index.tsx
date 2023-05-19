import {Button, Card, Col, Grid, Image, Input, Loading, Spacer, Text} from "@nextui-org/react";
import {useState} from "react";
import {redirect} from "next/navigation";
import {useRouter} from "next/router";

export default function Signup() {
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    const handleSignup = async () => {
        setIsLoading(true)
        if (name === "" || email === "" || password === "") {
            setIsLoading(false)
            alert("Te rugăm să completezi toate câmpurile.")
            return
        }
        const emailRegex: RegExp = /\S+@\S+\.\S+/
        if (!emailRegex.test(email)) {
            setIsLoading(false)
            alert("Te rugăm să introduci o adresă de email validă.")
            return
        }
        if (password.length < 8) {
            setIsLoading(false)
            alert("Te rugăm să introduci o parolă de minim 8 caractere.")
            return
        }
        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        if (response.status === 200) {
            setIsLoading(false)
            router.replace("/login")
        } else {
            setIsLoading(false)
            alert("A apărut o eroare la înregistrare. Te rugăm să încerci din nou.")
        }
    }

    return (
        <Grid.Container direction={"row"} gap={0} css={{height: "100vh"}}>
            <Grid xs={12} sm={6} justify={"center"} alignItems={"center"} alignContent={"center"}>
                <Card css={{
                    width: "100%", '@xs': {
                        width: "70%"
                    }
                }}>
                    <Spacer y={1}/>
                    <Card.Header css={{textAlign: "center", flexDirection: "column", padding: 40}}>
                        <Image src={"/givtrackr.png"} width={"$20"} alt={"GivTrackr Logo"}/>
                        <Text h1>Înregistrare</Text>
                        <Text>Creează un cont pentru ONG-ul tău și bucură-te de încrederea sporită a donatorilor
                            tăi!</Text>
                    </Card.Header>
                    <Card.Body>
                        <Grid.Container direction={"column"} gap={1} justify={"center"} alignItems={"center"}>
                            <Grid css={{width: "80%"}}>
                                <Text>Nume ONG</Text>
                                <Input placeholder={"Asociația Hope"} width={"100%"}
                                       onChange={(e) => setName(e.target.value)}/>
                            </Grid>
                            <Grid css={{width: "80%"}}>
                                <Text>Email</Text>
                                <Input placeholder={"hello@asociatiahope.ro"} width={"100%"}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </Grid>
                            <Grid css={{width: "80%"}}>
                                <Text>Parolă</Text>
                                <Input.Password width={"100%"} onChange={(e) => setPassword(e.target.value)}/>
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
                            <Button color={"primary"} onPress={handleSignup}>{isLoading ?
                                <Loading type="points-opacity" color="currentColor"
                                         size="sm"/> : "Înregistrare"}</Button>
                        </Col>
                    </Card.Footer>
                    <Spacer y={1}/>
                </Card>
            </Grid>
            <Grid xs={0} sm={6} justify={"center"} alignItems={"center"} alignContent={"center"}
                  css={{backgroundColor: "blue"}}>
                <Image src={"https://kolakariola.ro/img/landing-page/hero-image-mobile.jpg"} width={"100%"}
                       css={{height: "100vh", minHeight: 950}} objectFit={"cover"} alt={"Side Image"} showSkeleton
                       maxDelay={3000}/>
            </Grid>
        </Grid.Container>
    );
}
