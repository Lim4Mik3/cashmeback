import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaPercent, FaStoreAlt } from 'react-icons/fa'
import { PanelCard } from './PanelCard'

export function SummaryPanel() {
  return (
    <SimpleGrid
      w="100%"
      h="36"
      minChildWidth={360}
      flexDirection="row"
      gap="12"
      my="6"
    >
      <PanelCard title="Vendas" content="280 vendas" icon={FaStoreAlt} />
      <PanelCard title="Lucro estimado" content="R$ 15.280,00" icon={GiReceiveMoney} />
      <PanelCard title="Cashback adquirido" content="180%" icon={FaPercent} />
    </SimpleGrid>
  )
}