import React from 'react'
import { Flex, Text, Badge } from '@chakra-ui/react'

export function SalesCard() {
  return (
    <Flex
      w="90%"
      borderRadius={8}
      px="8"
      py="6"
      bg="facebook.50"
      direction="column"
      boxShadow="lg"
    >
      <Flex
        as="header"
        w="100%"
        alignContent="center"
        justifyContent="space-between"
      >
        <Text 
          color="gray.900"
          fontSize="20"
          fontWeight="500"
        >
          Código da compra: #1817
        </Text>

        <Text
          fontWeight="bold"
          textTransform="uppercase"
          color="red.600"
        >
          Status: 
          <Badge colorScheme="green" bg="whatsapp.200" p="2" ml="2" borderRadius={8}>
            <Text
              textAlign="center"
              fontWeight="bold"
              letterSpacing="wide"
              color="whatsapp.900"
            >
              APROVADA
            </Text>
          </Badge>
        </Text>
      </Flex>

      <Flex
        align="center"
        justify="space-between"
      >
        <Text
          fontSize="36"
          color="gray.900"
          fontWeight="bold"
        >Valor: R$ 280,00</Text>
        <Text
          fontSize="20"
          color="gray.900"
          fontWeight="bold"
        >% Cashback aplicado: 10%</Text>
      </Flex>

      <Flex
         align="center"
         justify="space-between"
      >
        <Text
          fontSize="22"
          color="gray.900"
        >Data: 12/10/2021</Text>
        <Text
          fontSize="22"
          color="gray.900"
        >Valor cashback: R$ 28,00</Text>
      </Flex>
    </Flex>
  )
}