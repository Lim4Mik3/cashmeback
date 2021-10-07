import React from 'react'
import { Table, Thead, Tr, Th, Tbody, Td, Badge, Text } from '@chakra-ui/react'
import { useSales } from '../../hooks/useSales'

export function SaleTable() {
  const { userSales } = useSales();

  return (
    <Table variant="unstyled" colorScheme="facebook" mt={["2", "6"]}>
      <Thead>
        <Tr bg="twitter.200" borderRadius={8}>
          <Th>
            Código da compra
          </Th>
          <Th>
            Valor
          </Th>
          <Th>
            Data
          </Th>
          <Th>
            % de cashback aplicado
          </Th>
          <Th>
            Valor de cashback
          </Th>
          <Th>
            Status da compra
          </Th>
        </Tr>
      </Thead>
      <Tbody
        alignContent="center"
        justifyContent="center"
        color="black"
      >
        { userSales.map((sale, index) => (
          <Tr key={index} bg="gray.200" borderBottom="1px solid" borderColor="#666">
            <Td>
              {sale.sale_code}
            </Td>
            <Td>
              { new Intl.NumberFormat('pt-BR', 
                {
                  style: 'currency',
                  currency: 'BRL'
                }).format(sale.amount / 100) }
            </Td>
            <Td>
              { new Intl.DateTimeFormat('pt-BR').format(new Date(sale.sale_date)) }
            </Td>
            <Td>
              {sale.percent_cashback}%
            </Td>
            <Td>
              { new Intl.NumberFormat('pt-BR', 
                {
                  style: 'currency',
                  currency: 'BRL'
                }).format(sale.cashback_amount / 100) }
            </Td>
            <Td
              display="flex"
              alignContent="center"
              justifyContent="center"
            >
              <Badge colorScheme="green" bg="whatsapp.200" p="1" w="80%" borderRadius={8}>
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  letterSpacing="wide"
                  color="whatsapp.900"
                >
                  {sale.sale_status}
                </Text>
              </Badge>
            </Td>
          </Tr>
        )) }
      </Tbody>
    </Table>
  )
}