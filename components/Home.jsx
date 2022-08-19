import React from 'react'
import {
  AppTile,
  AppTilesWrapper,
  PrimaryBox,
  Page,
  Spacer,
  OneColumnLargeText
} from '@glif/react-components'
import styled from 'styled-components'

const FilecoinLink = styled.a.attrs(() => ({
  href: 'https://filecoin.io/',
  target: '_blank',
  rel: 'noopenner noreferrer'
}))`
  &:hover {
    color: var(--white);
  }
`

export default function AppsHome() {
  return (
    <Page
      appHeaderLinks={[
        {
          title: 'Blog',
          url: 'https://blog.glif.io'
        },
        {
          title: 'Code',
          url: 'https://github.com/glifio'
        },
        {
          title: 'Discord',
          url: 'https://discord.gg/B9ju5Eu4Rq'
        }
      ]}
    >
      <PrimaryBox>
        <h2>
          Glifs are interoperable apps and tools for{' '}
          <FilecoinLink>Filecoin</FilecoinLink>.
        </h2>
      </PrimaryBox>
      <AppTilesWrapper>
        <AppTile
          title='Wallet'
          description='A lightweight interface for sending and receiving Filecoin.'
          href={process.env.NEXT_PUBLIC_WALLET_URL}
          imgSrc='/bg-sender.jpg'
          imgSrcHover='/bg-sender-hover.jpg'
          small
        />
        <AppTile
          title='Safe'
          oldTileName='Vault'
          description='A Filecoin multisig.'
          href={process.env.NEXT_PUBLIC_SAFE_URL}
          imgSrc='/bg-safe.jpg'
          imgSrcHover='/bg-safe-hover.jpg'
          small
        />
        <AppTile
          title='Explorer'
          beta
          description='A Filecoin network explorer.'
          href={process.env.NEXT_PUBLIC_EXPLORER_URL}
          imgSrc='/bg-explorer.jpg'
          imgSrcHover='/bg-explorer-hover.jpg'
          small
        />
        <AppTile
          title='Verify'
          description='A Filecoin notary service.'
          href={process.env.NEXT_PUBLIC_VERIFIER_URL}
          imgSrc='/bg-verifier.jpg'
          imgSrcHover='/bg-verifier-hover.jpg'
          small
        />
        <AppTile
          title='Nodes'
          description='Hosted Filecoin Nodes.'
          href={process.env.NEXT_PUBLIC_NODE_URL}
          imgSrc='/bg-node.jpg'
          imgSrcHover='/bg-node-hover.jpg'
          small
        />
      </AppTilesWrapper>

      <Spacer />

      <OneColumnLargeText>
        <p>
          Instead of the fortress, there are numerous fortresses now, and
          various people have keys.
        </p>
        <p>
          The treasures are no longer stored in the secluded cellars and tombs
          of the few, but guarded by the many. A new language has evolved, used
          to keep the treasures safe and allow those who watch over them to
          communicate, directly and discretely. The hieroglyphic system consists
          only of geometric shapes, as an homage to the interconnected data
          centers with their cages, racks and cabinets.
        </p>
      </OneColumnLargeText>
    </Page>
  )
}
