import App from 'next/app'
import Head from 'next/head'
import { theme, ThemeProvider } from '@glif/react-components'

import '../stylesheets/normalize.css'
import '../stylesheets/styles.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Glifs are tools for the Filecoin network</title>
          <meta
            name='description'
            content='An interoperable set of tools for the Filecoin network. Part of the Infinite Scroll.'
          />
          <meta
            name='keywords'
            content='Filecoin,Wallet,Web,Storage,Blockchain'
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
          <meta property='og:title' content='Glif' />
          <meta
            property='og:description'
            content='Interoperable tools for the Filecoin network'
          />
          <meta property='og:image' content='/glifogmeta.png' />
          <meta property='og:url' content='https://www.glif.io' />

          <meta name='twitter:title' content='Glif' />
          <meta
            name='twitter:description'
            content='Interoperable tools for the Filecoin network'
          />
          <meta name='twitter:image' content='/glifogmeta.png' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='twitter:creator'
            content='@infinitescroll_'
            key='twhandle'
          />

          <meta property='og:site_name' content='Glif' />
          <meta
            name='twitter:image:alt'
            content='Interoperable tools for the Filecoin network'
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
