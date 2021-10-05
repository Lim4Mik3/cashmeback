import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaPercent, FaStoreAlt } from 'react-icons/fa'
import { PanelCard } from './PanelCard'

export function SummaryPanel() {
  return (
    <SimpleGrid
      w="100%"
      minChildWidth={[280, 360]}
      flexDirection={["column", "column", "row"]}
      gap={["6", "12"]}
      my={["2", "6"]}
    >
      <PanelCard title="Vendas" content="280 vendas" icon={FaStoreAlt} />
      <PanelCard title="Cashback acumulado" content="R$ 15.280,00" icon={GiReceiveMoney} />
      <PanelCard title="Cashback adquirido" content="180%" icon={FaPercent} />
    </SimpleGrid>
  )
}