import React from 'react'
import {
  AppHeader,
  AppTile,
  AppTilesWrapper,
  Box,
  Footer,
  P,
  fontSize,
  space,
  devices,
  maxWidth,
  theme
} from '@glif/react-components'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const TextBox = styled.div`
  font-size: ${fontSize('large')};
  border-radius: 8px;
  margin-top: ${space()};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${devices.phone}) {
    padding: ${space('large', 'phone')};
  }

  @media (min-width: ${devices.phone}) and (max-width: ${devices.tablet}) {
    padding: 40px ${space('large', 'tablet')};
  }

  @media (min-width: ${devices.tablet}) {
    padding: 80px ${space('large', 'desktop')};
  }
`

const StyledText = styled(P)`
  font-size: inherit;
  max-width: 670px;

  > a {
    font-size: inherit;

    &:hover {
      text-decoration: none;
      color: inherit;
    }
  }
`

const BoxStyled = styled(Box)`
  @media (max-width: ${devices.phone}) {
    padding: ${space('default', 'phone')};
  }

  @media (min-width: ${devices.phone}) {
    padding: ${space()};
  }
`

const AppTilesWrapperStyled = styled(AppTilesWrapper)`
  max-width: ${maxWidth};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${devices.tablet}) {
    width: calc(100% + (${space('default', 'phone')} * 2));
    margin-left: calc(${space('default', 'phone')}*-1);
  }
`

export default function AppsHome() {
  const router = useRouter()
  return (
    <BoxStyled>
      <AppHeader
        homeHref=''
        blogHref='https://blog.glif.io'
        codeHref='https://github.com/glifio/'
        nodesHref='https://lotus.filecoin.io/docs/developers/hosted-lotus/'
      />
      <AppTilesWrapperStyled>
        <AppTile
          title='Wallet'
          description='A lightweight interface for sending and receiving Filecoin.'
          href={process.env.NEXT_PUBLIC_WALLET_HREF}
          imgSrc='/bg-sender.jpg'
          imgSrcHover='/bg-sender-hover.jpg'
          small
        />
        <AppTile
          title='Safe'
          oldTileName='Vault'
          description='A Filecoin multisig.'
          href={process.env.NEXT_PUBLIC_SAFE_HREF}
          imgSrc='/bg-safe.jpg'
          imgSrcHover='/bg-safe-hover.jpg'
          small
        />
        <AppTile
          title='Explorer'
          beta
          description='A Filecoin network explorer.'
          href={process.env.NEXT_PUBLIC_EXPLORER_HREF}
          imgSrc='/bg-explorer.jpg'
          imgSrcHover='/bg-explorer-hover.jpg'
          small
        />
        <AppTile
          title='Verify'
          description='A Filecoin notary service.'
          href={process.env.NEXT_PUBLIC_VERIFIER_HREF}
          imgSrc='/bg-verifier.jpg'
          imgSrcHover='/bg-verifier-hover.jpg'
          small
        />
      </AppTilesWrapperStyled>
      <TextBox>
        <StyledText>
          Instead of the fortress, there are numerous fortresses now, and
          various people have keys.
        </StyledText>
        <StyledText>
          The treasures are no longer stored in the secluded cellars and tombs
          of the few, but guarded by the many. A new language has evolved, used
          to keep the treasures safe and allow those who watch over them to
          communicate, directly and discretely. The hieroglyphic system consists
          only of geometric shapes, as an homage to the interconnected data
          centers with their cages, racks and cabinets.
        </StyledText>
        <StyledText>
          All miners shall have their own, personalised Glif, as a gesture of
          allegiance. (soon)
        </StyledText>
      </TextBox>

      <TextBox
        style={{
          color: 'white',
          background: theme.colors.core.primary
        }}
      >
        <StyledText>
          Glif offers a suite of interoperable tools for the{' '}
          <a href='#' target='_blank'>
            Filecoin
          </a>{' '}
          network. With these tools, people can store, permission, and trade
          their data in healthy and equitable ways.
        </StyledText>
      </TextBox>

      <Footer />
    </BoxStyled>
  )
}
