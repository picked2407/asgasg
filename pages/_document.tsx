// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Favicon  */}
                <link rel="icon" type="icon" href="/assets/images/logo.png" />
                {/* Fonts  */}
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />{' '}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
