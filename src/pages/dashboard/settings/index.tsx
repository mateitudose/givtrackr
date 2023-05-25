import {Avatar, Button, Col, Container, Image, Input, Spacer, Text, Textarea} from "@nextui-org/react";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {useEffect, useState} from "react";
import {User} from "@supabase/auth-helpers-react";
import {useRouter} from "next/router";
import {Profile} from "@/interfaces/Profile";

export default function Settings() {
    const supabaseClient = createBrowserSupabaseClient();
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [profilePageLink, setProfilePageLink] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function setUserProfile() {
            const response = await supabaseClient.auth.getUser();
            if (response.data.user?.id === undefined) {
                router.replace("/");
                return;
            }
            setUser(response.data.user);
            const {
                data,
                error
            } = await supabaseClient.from("users").select('name, profile_photo, id, email, description').eq("id", response.data.user.id);
            if (error) {
                console.error(error);
                return;
            }
            setProfile(data[0]);
            setDescription(data[0].description);
            setProfilePageLink(`${window.location.origin}/donate/${data[0].id}`)
        }

        setUserProfile();
    }, []);

    const handleSave = async () => {
        const {
            error
        } = await supabaseClient.from("users").update({description}).eq("id", user?.id);
        if (error) {
            console.error(error);
            return;
        }
    }

    const handleProfilePhotoChange = async (e: any) => {
        const file = e.target.files[0];
        const randomUUID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const {
            data,
            error
        } = await supabaseClient.storage.from("profile_photos").upload(`public/${user?.id}/${randomUUID}`, file, {upsert: true});
        if (error) {
            console.error(error);
            return;
        }
        const {data: publicURL} = supabaseClient.storage.from('profile_photos').getPublicUrl(`public/${user?.id}/${randomUUID}`);
        if (publicURL === null) {
            console.error("publicURL is null");
            return;
        }
        const {
            error: updateError
        } = await supabaseClient.from("users").update({profile_photo: publicURL.publicUrl}).eq("id", user?.id);
        if (updateError) {
            console.error(updateError);
            return;
        }
    }

    return (
        <Container fluid css={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            maxWidth: "100vw",
            padding: "0 1rem",
            overflow: "auto"
        }}>
            <Spacer y={2}/>
            <Image src={"/givtrackr.png"} width={"$20"} alt={"GivTrackr Logo"} objectFit={"cover"}/>
            <Text h1>Setări</Text>
            <Text>Aici îți poți vedea și modifica anumite detalii ale contului tău:</Text>
            <Spacer y={2}/>
            <Avatar squared src={profile?.profile_photo} alt={"Profile Photo"} css={{size: 120}}/>
            <Spacer y={0.5}/>
            <Container css={{display: "flex", flexDirection: "column"}}>
                <label htmlFor="single">Schimbă poza</label>
                <input
                    style={{
                        visibility: 'hidden',
                        height: 0,
                    }}
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={handleProfilePhotoChange}
                />
            </Container>
            <Spacer y={2}/>
            <Col css={{maxWidth: 800}}>
                <Input readOnly initialValue={profilePageLink || ""} label={"Link public pentru donatori"}/>
                <Spacer y={0.5}/>
                <Input readOnly initialValue={profile?.name} label={"Numele ONG-ului"}/>
                <Spacer y={0.5}/>
                <Text>Din motive de siguranță, numele poate fi modificat doar de administratorul site-ului.</Text>
                <Spacer y={0.5}/>
                <Input readOnly initialValue={profile?.email} label={"Email asociat"}/>
                <Spacer y={0.5}/>
                <Textarea label={"Descriere"} width={"90%"} initialValue={description || ''}
                          onChange={(e) => setDescription(e.target.value)}/>
                <Spacer y={1}/>
            </Col>
            <Button onPress={handleSave}>Salvează</Button>
            <Spacer y={2}/>
        </Container>
    )
}
