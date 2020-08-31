import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { MenuItem, Box, IconGlif, Title } from '../Shared'

const TitleCopy = styled(Title)`
  /* Used this: https://stackoverflow.com/questions/14431411/pure-css-to-make-font-size-responsive-based-on-dynamic-amount-of-characters */
  font-size: calc(48px + (64 - 40) * (100vw - 360px) / (1440 - 360));
`

const SubtitleLogo = ({ alt, color, text, imageUrl }) => {
  return (
    <MenuItem display='flex' alignItems='center' width={['100%', 'auto']}>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        py={4}
        mr={[0, 6]}
        mb={[3, 0]}
        px={3}
        borderRadius={4}
        width={['100%', 'auto']}
        minWidth={11}

        css={`
          background: url(${imageUrl}) center no-repeat;
          background-size: 100%;
          border-radius: 16px;
          alt: ${alt};
        `}
      >
        <IconGlif
          fill='#fff'
          size={[6, 7, 8]}
          css={`
            transform: rotate(-90deg);
          `}
        />
        <TitleCopy color={color} ml={3}>
          {text}
        </TitleCopy>
      </Box>
    </MenuItem>
  )
}

SubtitleLogo.propTypes = {
  alt: string,
  text: string.isRequired,
  imageUrl: string.isRequired,
  alt: string
}

SubtitleLogo.defaultProps = {
  alt: '',
  color: 'core.black'
}

export default SubtitleLogo
