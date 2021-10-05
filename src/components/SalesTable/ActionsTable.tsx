import React from 'react'
import { Flex, Text, Button, Icon } from '@chakra-ui/react'
import { GrAddCircle } from 'react-icons/gr'

export function ActionsTable() {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <Text fontSize="18" color="gray.900" fontWeight="700" textTransform="uppercase">
        Listagem de vendas realizadas
      </Text>
      <Button
        colorScheme="whatsapp"
        size="md"
        fontSize="15"
        alignContent="center"
        rightIcon={<Icon as={GrAddCircle} fontSize="18" color="red" />}
      >
        Cadastrar nova venda
      </Button>
    </Flex>
  )
}