import React from 'react'
import App from 'next/app';
import Header from '@/components/Header'
import withRedux from 'next-redux-wrapper';
import '@/styles/globals.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { makeStore } from '@/store/store';
import Head from 'next/head'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }
  
  render() {
    const { Component, pageProps, store }: any = this.props;

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

export default withRedux(makeStore, {})(MyApp)
