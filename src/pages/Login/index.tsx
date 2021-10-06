import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Flex, Text, VStack, Button } from "@chakra-ui/react"
import { Input } from "../../components/Form/Input"
import { Logo } from '../../components/Logo';
import { PublicLayout } from '../../components/Layouts/PublicLayout';
import { useSession } from '../../hooks/useSession';
import { FormEvent } from 'react-router/node_modules/@types/react';

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const userHistory = useHistory();
  const { Login } = useSession();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if(!(email.trim())) {
      return;
    }

    await Login({ email, password })
  }


  return (
    <PublicLayout>
      <Flex
        direction="column"
        bg="gray.200"
        w="100%"
        p="10"
        borderRadius={8}
        align="center"
        justify="center"
        boxShadow="2xl"
      >
        <Logo />          

        <Text
          fontSize={["14", "16", "20"]}
          py="2"
          color="blue.600"
          letterSpacing="tighter"
          textTransform="uppercase"
        >
          Faça login revendedor
        </Text>

          <VStack my="6" spacing={["2", "4"]} w="100%">
            <Input name="email" type="email" label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input name="password" type="password" label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          </VStack>

          <Button colorScheme="whatsapp" w="100%" mb="4" onClick={handleSubmit}>Entrar</Button>

          <Button w="100%" colorScheme="linkedin" onClick={() => userHistory.push("/signup")}>
            Criar uma conta
          </Button>
      </Flex>
    </PublicLayout>
  )
}