import React from 'react'
import { Flex, Text, Button, Icon } from '@chakra-ui/react'
import { GrAddCircle } from 'react-icons/gr'
import { useHistory } from 'react-router'

export function ActionsTable() {
  const userHistory = useHistory();

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
        onClick={() => userHistory.push('/sale')}
      >
        Cadastrar nova venda
      </Button>
    </Flex>
  )
}