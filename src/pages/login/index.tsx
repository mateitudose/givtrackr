import {Button, Card, Col, Grid, Image, Input, Loading, Spacer, Text} from "@nextui-org/react";
import {useState} from "react";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {useRouter} from "next/router";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const supabaseClient = createBrowserSupabaseClient();
    const router = useRouter();
    const handleLogin = async () => {
        setIsLoading(true)
        if (email === "" || password === "") {
            alert("Te rugăm să completezi toate câmpurile.")
            setIsLoading(false)
            return
        }
        const emailRegex: RegExp = /\S+@\S+\.\S+/
        if (!emailRegex.test(email)) {
            alert("Te rugăm să introduci o adresă de email validă.")
            setIsLoading(false)
            return
        }
        if (password.length < 8) {
            alert("Te rugăm să introduci o parolă de minim 8 caractere.")
            setIsLoading(false)
            return
        }
        await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        }).then((response) => {
            if (response.error) {
                alert("A apărut o eroare la conectare: " + response.error.message);
                setIsLoading(false)
                return
            }
            router.replace("/dashboard");
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
            alert("A apărut o eroare la conectare: " + error);
        });
    }

    return (
        <Grid.Container direction={"row"} gap={0} css={{height: "100vh"}}>
            <Grid xs={12} sm={6} justify={"center"} alignItems={"center"} alignContent={"center"}>
                <Card css={{
                    width: "100%", '@xs': {
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
                                <Input label={"Email"} placeholder={"hello@asociatiahope.ro"} width={"100%"} onChange={(e) => setEmail(e.target.value)}/>
                            </Grid>
                            <Grid css={{width: "80%"}}>
                                <Input.Password label={"Parolă"} width={"100%"} onChange={(e) => setPassword(e.target.value)}/>
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
                            <Button color={"primary"} onPress={handleLogin}>{isLoading ?
                                <Loading type="points-opacity" color="currentColor"
                                         size="sm"/> : "Conectare"}</Button>
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
    );
}
