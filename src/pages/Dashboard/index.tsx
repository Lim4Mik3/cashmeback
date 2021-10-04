import React from 'react'
import { Flex, Text, Icon, Button, Table, Thead, Tbody, Tr, Td, Th, Badge } from '@chakra-ui/react'
import { GrAddCircle } from 'react-icons/gr'

import { Header } from '../../components/Header'
import { SummaryPanel } from '../../components/SummaryPanel'

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
        my="0"
        mx="auto"
        pt="8"
        px="6"
      >
        <SummaryPanel />

        <Flex
          py="4"
          direction="column"
        >
          <Flex
            align="center"
            justify="space-between"
            w="100%"
          >
            <Text
              fontSize="21"
              color="gray.900"
              fontWeight="500"
              textTransform="uppercase"
            >Listagem de vendas realizadas</Text>
            <Button
              colorScheme="whatsapp"
              p="6"
              size="sm"
              fontSize="16"
              rightIcon={<Icon as={GrAddCircle} fontSize="18" color="red" />}
            >
              Cadastrar nova venda
            </Button>
          </Flex>

          <Table 
            variant="unstyled"  
            colorScheme="facebook"
            mt="8"
          >
            <Thead>
              <Tr
                bg="twitter.200"
                borderRadius={8}
              >
                <Th
                  color="gray.900"
                  fontSize="14"
                >
                  Código da compra
                </Th>
                <Th
                  color="gray.900"
                  fontSize="14"
                >
                  Valor
                </Th>
                <Th
                  color="gray.900"
                  fontSize="14"
                >
                  Data
                </Th>
                <Th
                  color="gray.900"
                  fontSize="14"
                >
                  % de cashback aplicado
                </Th>
                <Th
                  color="gray.900"
                  fontSize="14"
                >
                  Valor de cashback
                </Th>
                <Th
                  color="gray.900"
                  fontSize="14"
                >
                  Status da compra
                </Th>
              </Tr>
            </Thead>
            <Tbody
              alignContent="center"
              justifyContent="center"
              color="black"
            >
              <Tr
                bg="gray.200"
              >
                <Td
                  color="gray.700"
                  fontSize="20"
                >
                  #001
                </Td>
                <Td
                  color="gray.700"
                  fontSize="20"
                >
                  R$ 180,00
                </Td>
                <Td
                  color="gray.700"
                  fontSize="20"
                >
                  09/10/2021
                </Td>
                <Td
                  color="gray.700"
                  fontSize="20"
                >
                  15%
                </Td>
                <Td
                  color="gray.700"
                  fontSize="20"
                >
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
                    >APROVADA</Text>
                  </Badge>
                </Td>
              </Tr>
            </Tbody>
          </Table>

        </Flex>
      </Flex>


    </Flex>
  )
}