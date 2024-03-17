import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import { Provider } from 'react-redux';
import store from '../store/index';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <title>Prestamos 4K</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="title" content="Prestamos 4K" />
                <meta
                    name="description"
                    content="Our commitment is to provide personalized solutions for all personal and business projects with vision and promising future."
                />
                <meta name="keywords" content="Loan, business, america business, funding, venture capital" />
                <meta name="image" content="/assets/images/2.png" />
                <meta property="og:title" content="Prestamos 4K" />
                <meta
                    property="og:description"
                    content="Our commitment is to provide personalized solutions for all personal and business projects with vision and promising future."
                />
                <meta property="og:keywords" content="Loan, business, america business, funding, venture capital" />
                <meta property="og:image" content="/assets/images/2.png" />
            </Head>
            <DefaultLayout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Component {...pageProps} />
                </Suspense>
                <ToastContainer />
            </DefaultLayout>
        </Provider>
    );

    
}
