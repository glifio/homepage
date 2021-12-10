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

const TextBox = styled.div`
  font-size: ${fontSize('large')};
  border-radius: 8px;
  margin-top: ${space()};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${devices.tablet}) {
    padding: 80px;
  }

  @media (min-width: ${devices.gt.tablet}) {
    padding: 80px 40px;
  }
`

const StyledText = styled(P)`
  font-size: inherit;
  max-width: 670px;

  > a {
    font-size: inherit;
    color: inherit;

    &:hover {
      text-decoration: none;
    }
  }
`

export default function AppsHome() {
  return (
    <Box padding={3}>
      <AppHeader />
      <AppTilesWrapper
        style={{
          maxWidth: maxWidth,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <AppTile
          title='Wallet'
          description='A lightweight interface for sending Filecoin.'
          href='https://wallet.beta.glif.io'
          imgSrc='/bg-wallet.png'
          small
        />
        <AppTile
          title='Safe'
          oldTileName='Vault'
          description='A lightweight interface for sending Filecoin.'
          href='https://safe.beta.glif.io'
          imgSrc='/bg-wallet.png'
          small
        />
        <AppTile
          title='Verify'
          description='A Filecoin notary service.'
          href='https://verify.glif.io'
          imgSrc='/bg-safe.png'
          small
        />
        {/*         <AppTile
          title='Transaction History'
          description='A Filecoin notary service.'
          href='https://transaction-history.beta.glif.io'
          imgSrc='/bg-safe.png'
          small
        />
        <AppTile
          title='DeFi'
          description='A Filecoin notary service.'
          href='https://transaction-history.beta.glif.io'
          imgSrc='/bg-safe.png'
          small
          soon
        />
        <AppTile
          title='Storage'
          description='A Filecoin notary service.'
          href='https://transaction-history.beta.glif.io'
          imgSrc='/bg-safe.png'
          small
          soon
        /> */}
      </AppTilesWrapper>
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
    </Box>
  )
}
