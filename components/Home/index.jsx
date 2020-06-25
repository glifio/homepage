import React, { useState } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'
import { space, layout, typography, border, color } from 'styled-system'
import { Box, Menu, MenuItem, Title, Text, IconGlif } from '../Shared'
import SubtitleLogo from './SubtitleLogo'
import ExitLink, { LinkWrapper } from './ExitLink'

const TitleCopy = styled(Title)`
  /* Used this: https://stackoverflow.com/questions/14431411/pure-css-to-make-font-size-responsive-based-on-dynamic-amount-of-characters */
  font-size: calc(48px + (64 - 40) * (100vw - 360px) / (1440 - 360));
`

const ButtonSignUp = styled.button`
  outline: none;
  border: 0;
  cursor: pointer;
  background: transparent;
  transition: 0.18s ease-in;

  &:hover {
    transform:scale(1.05);
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

const Sentence = ({ sentenceStr }) => {
  return sentenceStr.split(' ').map((word, i) => {
    return (
      <MenuItem key={i} mr='8%' my={[2, 3, 5]}>
        <TitleCopy>{word}</TitleCopy>
      </MenuItem>
    )
  })
}

Sentence.propTypes = {
  sentenceStr: string.isRequired
}

export default () => {
  const [clicked, setClicked] = useState(false)
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')
  const postToMailChimp = async () => {
    try {
      const res = await axios.post(
        `https://mailchimp-proxy.openworklabs.com/${email}`
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
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          flexWrap='wrap'
        >
          <MenuItem>
            <Box
              display='inline-block'
              py={3}
              mr={[4, 6, 7, 8]}
              px={2}
              borderRadius={4}
              css={`
                background: linear-gradient(180deg, #ff8d3b 0%, #ffeb80 100%);
                border-radius: 16px;
              `}
            >
              <IconGlif size={[6, 7, 8]} />
            </Box>
          </MenuItem>

          <Sentence sentenceStr='is an interoperable set of tools for the Filecion network.' />

          <MenuItem
            display='flex'
            flexWrap='wrap'
            alignItems='baseline'
            justifyContent='space-between'
            width='100%'
            color='core.darkgray'
            my={[2, 3]}
          >
            {clicked ? (
              <>
                <Menu display='flex' alignItems='center'>
                  <MenuItem>
                    <Box
                      display='flex'
                      flexWrap='wrap'
                      width={['100%', 'auto']}
                    >
                      <InputEmail
                        width={['100%', 'auto']}
                        fontSize={[4, 5, 6]}
                        color='core.nearblack'
                        border={1}
                        borderWidth={2}
                        px={3}
                        py={3}
                        textAlign='center'
                        placeholder='Your email, please'
                        borderTopLeftRadius={[0, 2]}
                        borderBottomLeftRadius={[0, 2]}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <ButtonSignUp
                        width={['100%', 'auto']}
                        color='core.white'
                        bg='core.nearblack'
                        fontSize={[4, 5, 6]}
                        border={1}
                        borderColor='core.nearblack'
                        borderWidth={2}
                        borderTopRightRadius={[0, 2]}
                        borderBottomRightRadius={[0, 2]}
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
                      <Title mt={2}>
                        Glif don&rsquo;t spam! Unsub whenever.
                      </Title>
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
                  borderRadius={6}
                  onClick={() => setClicked(false)}
                >
                  Cancel
                </ButtonSignUp>
              </>
            ) : (
              <>
                <Text fontSize={[4, 5, 6]} my={2}>
                  Be the first to learn when we launch
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
        </Menu>
      </section>
      <section name='Glif Wallet'>
        <Menu
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          flexWrap='wrap'
          my={9}
        >
          <SubtitleLogo
            alt='Source: https://www.nontemporary.com/post/190437968500'
            text='Wallet'
            imageUrl='/imgtools.png'
          />
          <Sentence sentenceStr='A lightweight interface for sending and receiving Filecoin.' />
          <ExitLink href='https://wallet.glif.io' />
        </Menu>
      </section>
      <section name='Glif Verify'>
        <Menu
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          flexWrap='wrap'
          my={9}
        >
          <SubtitleLogo color='white' text='Verify' imageUrl='/imgverify.png' />
          <Sentence sentenceStr='Earn verified Filecoin storage when you verify yourself.' />
          <ExitLink href='https://verify.glif.io' />
        </Menu>
      </section>
      <section name='Glif Node'>
        <Menu
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          flexWrap='wrap'
          my={9}
        >
          <SubtitleLogo
            alt='Credit & Source: https://www.nontemporary.com/post/187451107349/rob-nick-carter'
            imageUrl='/imgnode.png'
            text='Nodes'
          />

          <Sentence sentenceStr='Public and dedicated Filecoin node infrastructure.' />
        </Menu>
      </section>
      <section name='Made by OWL'>
        <Menu>
          <MenuItem display='flex' alignItems='center' my={[2, 3, 5]}>
            <IconGlif size={6} />
            <Title my={0} mx={2}>
              is an
              <LinkWrapper
                href='https://www.openworklabs.com'
                borderBottom={1}
                borderWidth={3}
                fontSize={4}
                mx={1}
                target='_blank'
                css={`
                  &:hover {
                    color: #0051ff;
                    background: transparent;
                  }
                  ::before {
                    border: 0;
                  }
                `}
              >
                OWL
              </LinkWrapper>
              project {'\u00A9'} 2020
            </Title>
          </MenuItem>
        </Menu>
      </section>
    </Box>
  )
}
