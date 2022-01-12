import App from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { theme, ThemeProvider } from '@glif/react-components'

import JSONLD from '../JSONLD'
import '../stylesheets/normalize.css'
import '../stylesheets/styles.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>GLIF</title>
          <meta
            name='description'
            content='Interoperable tools for the Filecoin network'
          />
          <meta
            name='keywords'
            content='Filecoin,Wallet,Web,Storage,Blockchain,Crypto,FIL'
          />
          <meta property='og:title' content='Glif' />{' '}
          <meta
            property='og:description'
            content='Interoperable tools for the Filecoin network'
          />
          <meta property='og:image' content='/glifogmeta.png' />
          <meta property='og:url' content='https://apps.glif.io' />
          <meta name='twitter:title' content='Glif' />
          <meta
            name='twitter:description'
            content='Interoperable tools for the Filecoin network'
          />
          <meta name='twitter:image' content='/glifogmeta.png' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:creator' content='@glifio' key='twhandle' />
          <meta property='og:site_name' content='Glif' />
          <meta
            name='twitter:image:alt'
            content='Interoperable tools for the Filecoin network'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-32x32.png'
          />
        </Head>
        <Script
          id='json-ld'
          type='application/ld+json'
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
        />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
