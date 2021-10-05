import React from 'react'
import { Flex } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { SummaryPanel } from '../../components/SummaryPanel'
import { SalesTable } from '../../components/SalesTable'

export function Dashboard() {
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
        <SummaryPanel />

        <SalesTable />
      </Flex>
    </Flex>
  )
}