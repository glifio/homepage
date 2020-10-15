import React, { useState } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'
import {
  space,
  layout,
  typography,
  border,
  color,
  boxShadow,
  flexbox
} from 'styled-system'
import {
  Box,
  InlineBox,
  Menu,
  MenuItem,
  Title,
  Text,
  IconGlif,
  Subtitle
} from '../Shared'
import SubtitleLogo from './SubtitleLogo'
import { StyledATag } from '../Shared/Link'

const ButtonSignUp = styled.button`
  outline: none;
  border: 0;
  cursor: pointer;
  background: transparent;
  transition: 0.18s ease-in;

  &:hover {
    transform: translateY(-5%);
  }
  ${space}
  ${layout}
  ${typography}
  ${border} 
  ${color}
`

const InputEmail = styled.input`
  outline: 0;
  border: 0;
  ::placeholder {
    color: #444;
  }
  ${space}
  ${layout}
  ${typography}
  ${border}
  ${color}
`

const GlifCardLinkWrapper = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  transition: 0.24s ease-in-out;
  ${space}
  ${layout}
  ${border} 
  ${boxShadow}
  ${flexbox}

  &:hover {
    transform: translate(8px, -8px);
  }
`

const GlifCard = ({ title, fill, description, imageUrl, href, linkName }) => {
  return (
    <GlifCardLinkWrapper
      href={href}
      target='_blank'
      display='flex'
      alignItems='center'
      justifyContent='flex-start'
      flexWrap='wrap'
      maxWidth={13}
      p={3}
      my={[4, 5]}
      boxShadow={2}
      borderRadius={4}
    >
      <SubtitleLogo
        alt='Source: https://www.nontemporary.com/post/190437968500'
        text='Wallet'
        imageUrl={imageUrl}
        fill={fill}
      />
      <Box>
        <Title fontSize={6} mt={[0, 3]}>
          {title}
        </Title>
        <Box display='flex'>
          <Title
            color='core.darkgray'
            fontSize={[5, '2.5rem']}
            my={4}
            letterSpacing='0.015rem'
          >
            {description}{' '}
            <InlineBox fontSize={[5, 6]} color='#0051ff'>
              {linkName}
            </InlineBox>{' '}
          </Title>
        </Box>
      </Box>
    </GlifCardLinkWrapper>
  )
}

export default () => {
  const [clicked, setClicked] = useState(false)
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')
  const postToMailChimp = async () => {
    try {
      const res = await axios.post(
        `https://mailchimp-proxy.openworklabs.com?email=${email}`
      )

      if (res.data.indexOf('success') === -1) {
        if (res.data.indexOf('already subscribed') > -1) {
          setError("You're already subscribed. :)")
          return
        }

        setError(
          "There was an issue getting you subscribed. We're on the case!"
        )
      } else {
        setSubscribed(true)
        setError('')
      }
    } catch (error) {
      setError(error.toString())
    }
  }

  return (
    <Box
      display='block'
      margin='0 auto'
      py={[2, 4]}
      pl={[3, 4, 6, 7]}
      pr={[3, 4, 6]}
      maxWidth='1680px'
      width='100%'
      minHeight='100vh'
    >
      <section name='Introduction'>
        <Menu
          position='relative'
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexWrap='wrap'
          maxWidth={18}
          margin='0 auto'
        >
          <Box py={4} my={4} px={2} borderRadius={4} border={1} bg='black'>
            <IconGlif size={[7, 8]} p={2} position='relative' fill='white' />
          </Box>
          <Title textAlign='center' fontSize={[5, 6]}>
            Glifs are interoperable tools for the Filecoin network
          </Title>
        </Menu>
      </section>

      <Box
        display='flex'
        flexWrap='wrap'
        justifyContent='space-around'
        mt={[4, 6]}
      >
        <section name='Glif Wallet'>
          <GlifCard
            imageUrl='/imgtools.png'
            title='Wallet'
            description='A lightweight interface for sending and receiving Filecoin.'
            href='https://wallet.glif.io'
            linkName='Go↗'
          />
        </section>

        <section name='Glif Vault'>
          <GlifCard
            imageUrl='/imgvault.png'
            fill='#fff'
            title='Vault'
            description='Use your Ledger device to hold your Filecoin SAFT.
'
            href='https://wallet.glif.io/vault'
            linkName='Go↗'
          />
        </section>

        <section name='Glif Modules'>
          <GlifCard
            imageUrl='/imgfaucet.jpg'
            fill='#000'
            title='Modules'
            description='A set of JavaScript tools to easily begin building on Filecoin'
            href='https://github.com/glifio/modules'
            linkName='Go↗'
          />
        </section>

        <section name='Glif Verify'>
          <GlifCard
            imageUrl='/imgverify.png'
            fill='#fff'
            title='Verify'
            description='Receive verified Filecoin storage.'
            href='https://verify.glif.io'
            linkName='Go↗'
          />
        </section>

        <section name='Glif Node'>
          <GlifCard
            imageUrl='/imgnode.png'
            fill='#fff'
            title='Nodes'
            description='Public and dedicated Filecoin node infrastructure.'
            href='mailto:squad@infinitescroll.org'
            linkName='Email Us↗'
          />
        </section>
      </Box>

      <section name='Sign uuuup'>
        <MenuItem
          display='flex'
          flexWrap='wrap'
          alignItems='baseline'
          justifyContent={['center', 'space-between']}
          width='100%'
          color='core.darkgray'
          my={[2, 4, 8]}
        >
          {clicked ? (
            <>
              <Menu display='flex' alignItems='center'>
                <MenuItem>
                  <Box
                    display='flex'
                    flexWrap='wrap'
                    width={['100%', 'auto']}
                    maxWidth={13}
                  >
                    <InputEmail
                      width='100%'
                      fontSize={[4, 5, 6]}
                      color='core.nearblack'
                      border={1}
                      borderWidth={2}
                      px={3}
                      py={3}
                      textAlign='center'
                      placeholder='Your email, please'
                      borderTopLeftRadius={4}
                      borderTopRightRadius={4}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <ButtonSignUp
                      width='100%'
                      color='core.white'
                      bg='core.nearblack'
                      fontSize={[4, 5, 6]}
                      border={1}
                      borderColor='core.nearblack'
                      borderWidth={2}
                      borderBottomLeftRadius={4}
                      borderBottomRightRadius={4}
                      px={6}
                      py={3}
                      height='max-content'
                      onClick={postToMailChimp}
                    >
                      Submit
                    </ButtonSignUp>
                  </Box>

                  {error ? (
                    <Title mt={2} color='red'>
                      {error}
                    </Title>
                  ) : (
                    <Title mt={2}>Glif don&rsquo;t spam! Unsub whenever.</Title>
                  )}
                  {subscribed && (
                    <Title mt={2} color='status.success.background'>
                      You&rsquo;re subscribed. Keep an eye out.
                    </Title>
                  )}
                </MenuItem>
              </Menu>
              <ButtonSignUp
                width={['100%', 'auto']}
                background='transparent'
                color='core.nearblack'
                fontSize={[4, 5, 6]}
                border={1}
                px={6}
                py={2}
                my={2}
                height='max-content'
                borderRadius={4}
                onClick={() => setClicked(false)}
              >
                Cancel
              </ButtonSignUp>
            </>
          ) : (
            <>
              <Text fontSize={[4, 5, 6]} textAlign='center' my={2}>
                Be the first to learn when we launch new glifs
              </Text>

              <ButtonSignUp
                background='transparent'
                color='core.nearblack'
                fontSize={[4, 5, 6]}
                border={1}
                px={6}
                py={2}
                height='max-content'
                borderRadius={4}
                onClick={() => setClicked(true)}
              >
                Sign Up
              </ButtonSignUp>
            </>
          )}
        </MenuItem>
      </section>
      <section name='Made by IS'>
        <Box
          display='flex'
          alignItems='center'
          flexGrow='1'
          width='100%'
          mt={6}
          mb={3}
        >
          <IconGlif size={6} />
          <Title fontSize={4} my={0} mx={2}>
            is part of the
            <StyledATag
              display='inline-block'
              href='https://www.infinitescroll.org'
              borderBottom={1}
              borderWidth={3}
              fontSize={4}
              mx={1}
              target='_blank'
            >
              Infinite Scroll
            </StyledATag>
            {'\u00A9'} 2020
          </Title>
        </Box>
      </section>
    </Box>
  )
}
