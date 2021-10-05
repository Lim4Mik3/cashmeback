import React from 'react'
import { Flex } from "@chakra-ui/react"
import { ReactNode } from 'react-router/node_modules/@types/react'

interface PublicLayoutProps {
  children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <Flex h="100vh" w="100vw" justifyContent="center" align="center" px="4">
      <Flex maxW={510} w="100%">
        {children}
      </Flex>      
    </Flex>
  )
}