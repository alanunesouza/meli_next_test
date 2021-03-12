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
          <title>Mercado Livre</title>
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
