import React from 'react'
import { Table, Thead, Tr, Th, Tbody, Td, Badge, Text } from '@chakra-ui/react'

export function SaleTable() {
  return (
    <Table variant="unstyled" colorScheme="facebook" mt="8">
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
        <Tr bg="gray.200">
          <Td>
            #001
          </Td>
          <Td>
            R$ 180,00
          </Td>
          <Td>
            09/10/2021
          </Td>
          <Td>
            15%
          </Td>
          <Td>
            R$ 27,00
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
                APROVADA
              </Text>
            </Badge>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}