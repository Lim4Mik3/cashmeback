import React from 'react'
import { Flex, useBreakpointValue } from '@chakra-ui/react'

import { ActionsTable } from './ActionsTable'
import { SaleTable } from './SaleTable'
import { SalesCard } from './SalesCard'

export function SalesTable() {
  const isWideVersion = useBreakpointValue({ sm: false, md: false, lg: true })

  return (
    <Flex direction="column" align="center" justify="center" mb="12">
      <ActionsTable />

      { isWideVersion && <SaleTable /> }

      { !isWideVersion && <SalesCard /> }
      </Flex>
  )
}