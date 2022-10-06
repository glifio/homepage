import '@glif/base-css'
import App from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { EnvironmentProvider } from '@glif/react-components'

import JSONLD from '../JSONLD'

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
          <meta property='og:title' content='Glif' />
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
        <EnvironmentProvider
          homeUrl={process.env.NEXT_PUBLIC_HOME_URL}
          blogUrl={process.env.NEXT_PUBLIC_BLOG_URL}
          walletUrl={process.env.NEXT_PUBLIC_WALLET_URL}
          safeUrl={process.env.NEXT_PUBLIC_SAFE_URL}
          explorerUrl={process.env.NEXT_PUBLIC_EXPLORER_URL}
          verifierUrl={process.env.NEXT_PUBLIC_VERIFIER_URL}
          nodeStatusApiUrl='https://api.uptimerobot.com/v2/getMonitors'
          isProd={false}
          sentryDsn={process.env.NEXT_PUBLIC_SENTRY_DSN}
          sentryEnv={process.env.NEXT_PUBLIC_SENTRY_ENV}
        >
          <Component {...pageProps} />
        </EnvironmentProvider>
      </>
    )
  }
}

export default MyApp
