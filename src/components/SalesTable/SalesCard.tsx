import React from 'react'
import { Flex, Text, Badge } from '@chakra-ui/react'
import { useSales } from '../../hooks/useSales';

export function SalesCard() {
  const { userSales } = useSales();
  
  return (
    <>
      { userSales.map((sale, index) => (
        <Flex
          key={index}
          w="90%"
          borderRadius={8}
          px="8"
          py="6"
          mt="4"
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
              Código da compra: {sale.sale_code}
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
                  {sale.sale_status}
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
            >Valor: { new Intl.NumberFormat('pt-BR', 
            {
              style: 'currency',
              currency: 'BRL'
            }).format(sale.amount / 100) }
            </Text>
            <Text
              fontSize="20"
              color="gray.900"
              fontWeight="bold"
            >% Cashback aplicado: {sale.percent_cashback}%</Text>
          </Flex>
    
          <Flex
            align="center"
            justify="space-between"
          >
            <Text
              fontSize="22"
              color="gray.900"
            >Data: { new Intl.DateTimeFormat('pt-BR').format(new Date(sale.sale_date)) }</Text>
            <Text
              fontSize="22"
              color="gray.900"
            >Valor cashback: { new Intl.NumberFormat('pt-BR', 
            {
              style: 'currency',
              currency: 'BRL'
            }).format(sale.cashback_amount / 100) }
            </Text>
          </Flex>
        </Flex>
      ))}
    </>
  )
}