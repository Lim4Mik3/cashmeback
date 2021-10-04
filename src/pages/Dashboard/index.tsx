import React from 'react'
import { Flex, Box, Text, SimpleGrid, Icon, Img, Button, Table, Thead, Tbody, Tr, Td, Th, Badge } from '@chakra-ui/react'
import { GiReceiveMoney } from 'react-icons/gi'
import { GrAddCircle } from 'react-icons/gr'
import { FaPercent } from 'react-icons/fa'

import incomeImg from '../../assets/income.svg'

export function Dashboard() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      direction="column"
    >
      <Flex
        as="header"
        w="100%"
        h="20"
        bg="whiteAlpha.800"
        align="center"
        justify="center"
        boxShadow="lg"
        zIndex="9"
      >
        <Text
            fontSize="30"
            color="gray.900"
            fontWeight="light"
            letterSpacing="tight"
          >Cashme
            <Text
              fontSize="30"
              color="whatsapp.500"
              display="inline-block"
              fontWeight="bold"
            >
              BACK 🤑
          </Text>
        </Text>

      </Flex>

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
        <SimpleGrid
          w="100%"
          h="36"
          minChildWidth={360}
          flexDirection="row"
          gap="12"
          my="6"
        >
          <Flex
            w="100%"
            h="36"
            bg="facebook.50"
            px="10"
            py="2"
            borderRadius={12}
            boxShadow="lg"
            direction="column"
            justify="space-between"
          >
            <Box
              as="header"
              display="flex"
              alignContent="center"
              justifyContent="space-between"
              pt="4"
            >
              <Text
                textAlign="left"
                color="gray.600"
                fontWeight="thin"
                fontSize="26"
              >Vendas</Text>
              <Img src={incomeImg} />
            </Box>

            <Text
              mt="auto"
              textAlign="left"
              color="gray.600"
              fontWeight="500"
              fontSize="34"
            >280 vendas</Text>
          </Flex>          
          <Flex
            w="100%"
            h="36"
            bg="facebook.50"
            px="10"
            py="2"
            borderRadius={12}
            boxShadow="lg"
            direction="column"
            justify="space-between"
          >
            <Box
              as="header"
              display="flex"
              alignContent="center"
              justifyContent="space-between"
              pt="4"
            >
              <Text
                textAlign="left"
                color="gray.600"
                fontWeight="thin"
                fontSize="26"
              >Lucro estimado</Text>
              <Icon as={GiReceiveMoney} color="green.500" fontSize="30" />
            </Box>

            <Text
              mt="auto"
              textAlign="left"
              color="gray.600"
              fontWeight="500"
              fontSize="34"
            >R$ 15.280,00</Text>
          </Flex>          
          <Flex
            w="100%"
            h="36"
            bg="facebook.50"
            px="10"
            py="2"
            borderRadius={12}
            boxShadow="lg"
            direction="column"
            justify="space-between"
          >
            <Box
              as="header"
              display="flex"
              alignContent="center"
              justifyContent="space-between"
               pt="4"
            >
              <Text
                textAlign="left"
                color="gray.600"
                fontWeight="thin"
                fontSize="26"
              >Cashback adquirido</Text>
              <Icon as={FaPercent} color="green.500" fontSize="28" />
            </Box>

            <Text
              mt="auto"
              textAlign="left"
              color="gray.600"
              fontWeight="500"
              fontSize="34"
            >180%</Text>
          </Flex>          
        </SimpleGrid>        

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