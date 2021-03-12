import React from 'react'
import App, { AppContext, AppInitialProps } from 'next/app';
import Header from '@/components/Header'
import '@/styles/globals.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { wrapper } from '@/store/store';
import Head from 'next/head'

class MyApp extends App<AppInitialProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }
  
  render() {
    const { Component, pageProps }: any = this.props;

    return (
      <>
        <Head>
          <meta name="description" content="Encuentre lo que busca en el Día del Consumidor. Todo lo que necesitas está en Mercado Libre."/>
          <title>Mercado Livre</title>
          <meta name="google" content="notranslate" />
          <meta name="google-site-verification" content="SatzofZuX4b_Yt3F0R3m5QPkeEbxBklkqIQlwYn2ATA" />
        </Head>

          <Header />
          <main>
            <Component {...pageProps} />
          </main>
      </>
    )
  }
}

export default wrapper.withRedux(MyApp)
