import React from 'react'
import { Flex, Text, Button, Icon } from '@chakra-ui/react'
import { GrAddCircle } from 'react-icons/gr'
import { useHistory } from 'react-router'

export function ActionsTable() {
  const userHistory = useHistory();

  return (
    <Flex align="center" justify="space-between" w="100%" pb={["4", "6"]}>
      <Text fontSize={["12", "16", "18"]} color="gray.900" fontWeight="700" textTransform="uppercase">
        Listagem de vendas realizadas
      </Text>
      <Button
        colorScheme="whatsapp"
        size="md"
        fontSize={["12", "15"]}
        px={["6", "8"]}
        alignContent="center"
        rightIcon={<Icon as={GrAddCircle} fontSize={["16", "18"]} color="red" />}
        onClick={() => userHistory.push('/sale')}
      >
        Cadastrar nova venda
      </Button>
    </Flex>
  )
}