import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
