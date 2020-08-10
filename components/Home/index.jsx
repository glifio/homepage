import React, { useState } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import axios from 'axios'
import { space, layout, typography, border, color } from 'styled-system'
import { Box, Menu, MenuItem, Title, Text, IconGlif, Subtitle } from '../Shared'
import SubtitleLogo from './SubtitleLogo'
import ExitLink, { LinkWrapper } from './ExitLink'

const ButtonSignUp = styled.button`
  outline: none;
  border: 0;
  cursor: pointer;
  background: transparent;
  transition: 0.18s ease-in;

  &:hover {
    transform:translateY(-5%);
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

// To be paired with MiniGlifIcon
const MiniGlifCopy = styled(Title)`
  font-size: ${(props) => props.theme.fontSizes[6]};
  color: transparent;
  -webkit-text-stroke: 1px #000;
`

// To be used as a quicklink shortcut in the future
const MiniGlifIcon = ({ backgroundImg }) => {
  return (
    <Box
      borderRadius={3}
      mx={2}
      size={7}
      css={`
        background-position: center center;
        background-size: cover;
        background-image: url(${backgroundImg});
      `}
    ></Box>
  )
}

// Example usage
/* <MiniGlifCopy
              fontSize={6}
              css={`
                -webkit-text-outline: 1px solid #444;
              `}
            >
              VERIFY
            </MiniGlifCopy> 
  <Box
            mr='8%'
            width={['100%', 'auto']}
            display='flex'
            justifyContent='center'
          >
            <MiniGlifIcon backgroundImg='/imgtools.png' />
            <MiniGlifIcon backgroundImg='/imgverify.png' />
            <MiniGlifIcon backgroundImg='/imgnode.png' /> 
  </Box>
  */


const Sentence = ({ sentenceStr }) => {
  return sentenceStr.split(' ').map((word, i) => {
    return (
      <MenuItem key={i} mr='8%' my={[2, 3, 5]}>
        <Subtitle>{word}</Subtitle>
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
          position='relative'
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexWrap='wrap'
          mb={8}
        >
         
          <Sentence sentenceStr='Glif is an interoperable set of tools' />
        
          <Box py={3} mr='8%' px={2} borderRadius={4} border={1} bg='black'>
            <IconGlif size={[6, 7, 8]} position='relative' fill='white' />
          </Box>
          <Sentence sentenceStr='for the Filecoin network.' />
          <MenuItem
            display='flex'
            flexWrap='wrap'
            alignItems='baseline'
            justifyContent={['center', 'space-between']}
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
                  borderRadius={4}
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
          mb={9}
        >
          <SubtitleLogo
            alt='Source: https://www.nontemporary.com/post/190437968500'
            text='Wallet'
            imageUrl='/imgtools.png'
          />
          <Sentence sentenceStr='A lightweight interface for sending and receiving Filecoin.' />
          <ExitLink linkName='Go' href='https://wallet.glif.io' />
        </Menu>
      </section>
      <section name='Glif Faucet'>
        <Menu
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          flexWrap='wrap'
          mb={9}
        >
          <SubtitleLogo
            alt='Source: https://unsplash.com/photos/g2Zf3hJyYAc'
            text='Faucet'
            imageUrl='/imgfaucet.jpg'
          />
          <Sentence sentenceStr='Quickily, easily receive testnet Filecoin.' />
          <ExitLink linkName='Go' href='https://faucet.glif.io' />
        </Menu>
      </section>
      <section name='Glif Verify'>
        <Menu
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          flexWrap='wrap'
          mb={9}
        >
          <SubtitleLogo color='white' text='Verify' imageUrl='/imgverify.png' />
          <Sentence sentenceStr='Earn "Verified" Filecoin storage when you verify yourself.' />
          <ExitLink linkName='Go' href='https://verify.glif.io' />
        </Menu>
      </section>
      <section name='Glif Node'>
        <Menu
          display='flex'
          alignItems='center'
          justifyContent='flex-start'
          flexWrap='wrap'
          mb={9}
        >
          <SubtitleLogo
            alt='Credit & Source: https://www.nontemporary.com/post/187451107349/rob-nick-carter'
            imageUrl='/imgnode.png'
            text='Nodes'
          />

          <Sentence sentenceStr='Public and dedicated Filecoin node infrastructure.' />
          <ExitLink linkName='Email Us' href='mailto:ahoy@openworklabs.com' />
        </Menu>
      </section>
      <section name='Made by OWL'>
        <Menu>
          <MenuItem display='flex' alignItems='center' my={[2, 3, 5]}>
            <IconGlif size={6} />

            <Title my={0} mx={2} display='flex'>
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
