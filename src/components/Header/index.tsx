import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Logo } from '../Logo'
import { Profile } from './Profile'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      bg="whiteAlpha.800"
    >
      <Flex
        maxW={1280}
        w="100%"
        my="0"
        mx="auto"
        align="center"
        justify="space-between"
        px="6"
        zIndex="99"
      >
        <Logo />

        <Profile />
      </Flex>
    </Flex>
  )
}