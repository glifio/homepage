import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { MenuItem, Box, IconGlif, Title } from '../Shared'

const TitleCopy = styled(Title)`
  /* Used this: https://stackoverflow.com/questions/14431411/pure-css-to-make-font-size-responsive-based-on-dynamic-amount-of-characters */
  font-size: 4rem;
`

const SubtitleLogo = ({ alt, fill, imageUrl }) => {
  return (
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        py={4}
        mb={[3, 0]}
        px={3}
        borderRadius={4}
        size={['120px', 9]}

        css={`
          background: url(${imageUrl}) center center no-repeat;
          background-size: 160%;
          border-radius: 16px;
          alt: ${alt};
        `}
      >
       
        <IconGlif fill={fill} size={[5,6,7]} />
      
     
        </Box>
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
  fill: 'core.black'
}

export default SubtitleLogo
