import React from 'react'
import { Text, Flex, Button, Icon, VStack, useBreakpointValue } from "@chakra-ui/react"
import { MdArrowBack } from 'react-icons/md'

import { PrivateLayout } from '../../components/Layouts/PrivateLayout'
import { Input } from '../../components/Form/Input'
import { useHistory } from 'react-router'

export function RegisterSales() {
  const userHistory = useHistory();
  const isWideVersion = useBreakpointValue({ sm: false, md: true })

  return (
    <PrivateLayout>
      <Flex w="100%" align="center" justifyContent="space-between">
        <Button 
          colorScheme="blue" 
          leftIcon={<Icon as={MdArrowBack} fontSize={["18", "20"]} />} 
          color="gray.900"
          onClick={() => userHistory.push('/dashboard')}
          fontSize={["16", "20"]}
        >
          Voltar
        </Button>

        <Text 
          fontSize={["18", "22"]}
          color="whatsapp.800" 
          textTransform="uppercase" 
          fontWeight="700"
          textAlign={["right", "center"]}
        >
          Cadastrar nova venda
        </Text>

        {
          isWideVersion && (
            <Text fontSize="16" textAlign="right" color="gray.500">
              250 vendas <br /> cadastradas.
            </Text>
          ) 
        }
      </Flex>

      <Flex
        align="center"
        direction="column"
        h="100%"
        mt={["5", "20"]}
        >
        <VStack
          pt="10"
          w={["60", "96"]}
          spacing="6"
        >  
          <Input name="salecode" type="number" label="Código da compra"  />
          <Input name="value" type="number" label="Valor da compra" />
          <Input name="data" type="date" label="Data da venda" />
          <Button
            colorScheme="whatsapp"
            w="100%"
            size="lg"
          > 
            Cadastrar venda
          </Button>
        </VStack>

      </Flex>

    </PrivateLayout>
  )
}