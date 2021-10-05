import React from 'react'
import { Flex } from '@chakra-ui/react'

import { ActionsTable } from './ActionsTable'
import { SaleTable } from './SaleTable'


export function SalesTable() {
  return (
    <Flex py="4" direction="column">
      <ActionsTable />

      <SaleTable />
    </Flex>
  )
}