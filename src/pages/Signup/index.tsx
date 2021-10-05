import React from 'react'
import { useHistory } from 'react-router-dom'
import { Flex, Text, VStack, Button } from "@chakra-ui/react"
import { Input } from "../../components/Form/Input"
import { PublicLayout } from '../../components/Layouts/PublicLayout';
import { Logo } from '../../components/Logo';

export function Signup() {
  const userHistory = useHistory();

  return (
    <PublicLayout>
      <Flex
        direction="column"
        bg="gray.200"
        w="100%"
        my="4"
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
        >Cadastra-se revendedor</Text>

        <VStack my="6" w="100%">
          <Input name="name" type="name" label="Nome completo"/>
          <Input name="cpf" type="number" label="CPF"/>
          <Input name="email" type="email" label="E-mail"/>
          <Input name="password" type="password" label="Senha"/>
        </VStack>

        <Button colorScheme="whatsapp" w="100%" mb="4">Cadastrar</Button>

        <Button w="100%" colorScheme="linkedin"onClick={() => userHistory.push("/")}>
          Fazer login
        </Button>
      </Flex>
    </PublicLayout>
  )
}