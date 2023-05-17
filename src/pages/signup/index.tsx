import {Container, Grid, Image} from "@nextui-org/react";

export default function Signup() {
    return (
        <Container fluid css={{padding: 0, minHeight: "100vh"}}>
            <Grid.Container direction={"row"} gap={0} css={{height: "100%"}}>
                <Grid xs={12} sm={6} justify={"center"} alignItems={"center"} alignContent={"center"} css={{backgroundColor:"red"}}>

                </Grid>
                <Grid xs={12} sm={6} justify={"center"} alignItems={"center"} alignContent={"center"}>
                    <Image src={"https://kolakariola.ro/img/landing-page/hero-image-mobile.jpg"} width={"100%"} height={"100%"} objectFit={"cover"} alt={"Sign Up Photo"}/>
                </Grid>
            </Grid.Container>
        </Container>
    )
}
