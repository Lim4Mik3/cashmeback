import React from 'react'
import { Flex, Box, Text, SimpleGrid, Icon, Img } from '@chakra-ui/react'
import { GiReceiveMoney } from 'react-icons/gi'
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
        maxW={1280}
        w="100%"
        bg="white"
        h="100%"
        my="0"
        mx="auto"
        py="6"
        px="4"
      >
        <SimpleGrid
          w="100%"
          h="36"
          minChildWidth={360}
          flexDirection="row"
          gap="12"
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
              <Icon as={FaPercent} color="green.500" fontSize="30" />
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
      </Flex>


    </Flex>
  )
}