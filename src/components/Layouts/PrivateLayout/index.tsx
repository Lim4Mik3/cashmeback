import React from 'react'
import { Flex } from '@chakra-ui/react';

import { Header } from '../../Header';
import { ReactNode } from 'react-router/node_modules/@types/react';

interface PrivateLayoutProps {
  children: ReactNode;
}

export function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Header />

      <Flex
        as="main"
        direction="column"
        maxW={1280}
        w="100%"
        bg="white"
        h="100%"
        mx="auto"
        pt="8"
        px="6"
      > 
        {children}
      </Flex>
    </Flex>
  )
}