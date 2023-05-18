import type {AppProps} from 'next/app'
import {NextUIProvider} from "@nextui-org/react";
import {createBrowserSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {useState} from "react";
import {Session, SessionContextProvider} from "@supabase/auth-helpers-react";

export default function App({Component, pageProps}: AppProps<{ initialSession: Session }>) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient());
    return (
        <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </SessionContextProvider>
    )
}
