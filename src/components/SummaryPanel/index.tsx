import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaPercent, FaStoreAlt } from 'react-icons/fa'
import { PanelCard } from './PanelCard'
import { useSales } from '../../hooks/useSales'

export function SummaryPanel() {
  const { userSales } = useSales();

  const cashback_accumulated = userSales.reduce((acc, sale) => acc+= sale.cashback_amount, 0);
  const cashback_accumilated_parse = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(cashback_accumulated / 100) 

  const last_cashback = userSales.map(sale => sale.percent_cashback).pop();
  
  return (
    <SimpleGrid
      w="100%"
      minChildWidth={[280, 360]}
      flexDirection={["column", "column", "row"]}
      gap={["6", "12"]}
      my={["2", "6"]}
    >
      <PanelCard title="Vendas" content={`${userSales.length} vendas`} icon={FaStoreAlt} />
      <PanelCard title="Cashback acumulado" content={cashback_accumilated_parse} icon={GiReceiveMoney} />
      <PanelCard title="Último cashback" content={`${last_cashback ? last_cashback : '0'}%`} icon={FaPercent} />
    </SimpleGrid>
  )
}