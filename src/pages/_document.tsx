import React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {CssBaseline} from '@nextui-org/react';
import Script from "next/script";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: React.Children.toArray([initialProps.styles])
        };
    }

    render() {
        return (
            <Html lang="ro">
                <title>GivTrackr</title>
                <meta
                    name="description"
                    content="GivTrackr permite ONG-urilor să își transparentizeze activitatea prin publicarea cheltuielilor efectuate."
                />
                <Head>
                    {CssBaseline.flush()}
                    <Script src={"https://unpkg.com/tachyonjs@2.0.1/tachyon.min.js"} integrity={"sha384-4iJteL1FYnj4Ju83AJvNthpx5gZ1QaXCamXhY3lxhAjTNXUN+NXq5LQV/fXOSRme"} type={"module"} crossOrigin={""} defer></Script>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
