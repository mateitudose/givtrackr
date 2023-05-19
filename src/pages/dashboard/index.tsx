import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {useUser} from "@supabase/auth-helpers-react";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Dashboard() {
    const supabaseClient = createBrowserSupabaseClient();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
        async function loadData() {
            const {data} = await supabaseClient.from('users').select('*').eq('id', user?.id);
            setLoading(false);
            console.log("Data: ", data);
        }

        if (user) {
            loadData();
        } else {
            router.replace("/");
        }
    }, []);

    if (loading) {
        return <div></div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Salut, {user?.email}!</p>
        </div>
    );
}
