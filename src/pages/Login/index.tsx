import React from 'react'
import { useHistory } from 'react-router-dom'
import { Flex, Text, VStack, Button } from "@chakra-ui/react"
import { Input } from "../../components/Form/Input"
import { Logo } from '../../components/Logo';

export function Login() {
  const userHistory = useHistory();

  return (
    <Flex h="100vh" w="100vw" justifyContent="center">
      <Flex w={520} align="center" justify="center">
        <Flex
          direction="column"
          bg="gray.200"
          maxW={520}
          w="100%"
          p="10"
          borderRadius={8}
          align="center"
          justify="center"
          boxShadow="2xl"
        >
          <Logo />          

          <Text
            fontSize="18"
            py="2"
            color="blue.600"
            letterSpacing="tighter"
            textTransform="uppercase"
          >
            Faça login revendedor
          </Text>

          <VStack my="6" w="100%">
            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="Senha" />
          </VStack>

          <Button colorScheme="whatsapp" w="100%" mb="4">Entrar</Button>

          <Button w="100%" colorScheme="linkedin"onClick={() => userHistory.push("/signup")}>
            Criar uma conta
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}