import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { Flex, Text, VStack, Button, useToast } from "@chakra-ui/react"
import * as yup from 'yup'

import { Input } from "../../components/Form/Input"
import { PublicLayout } from '../../components/Layouts/PublicLayout';
import { Logo } from '../../components/Logo';
import { api } from '../../services/api'
import { useSession } from '../../hooks/useSession'
import { cpfMask } from '../../utils/CpfMask'

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const userHistory = useHistory();

  const { Login } = useSession();
  const toast = useToast();

  const inputShape = yup.object().shape({
    name: yup.string().required("O campo de nome é obrigatório"),
    email: yup.string().email("Por favor insira um email no formato correto").required("O campo de E-mail é obrigatório"),
    cpf: yup.string().min(11, "Um minímo de 11 caracteres para o CPF").required("O campo de CPF é obrigatório"),
    password: yup.string().min(5, "Um minímo de 5 caracteres para a senha").required("O campo de senha é obrigatório")
  })

  async function handleForm(event: FormEvent) {
    event.preventDefault();
    
    inputShape.validate({ name, email, cpf, password })
      .catch(err => {
        toast({
          title: 'Ops temos um erro',
          description: err.message,
          position: 'top',
          status: 'error',
          duration: 5000,
          isClosable: true
        })
        return;
      })
    
    try {
      const { data } = await api.post('/users', {
        name,
        email,
        cpf, 
        password
      })
      
      toast({
        title: 'EBAAA usuário criado',
        description: "Estamos fazendo seu login",
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: true
      })

      Login({
        email: data.email,
        password
      })

    } catch (error: any) {
      toast({
        title: 'Ops temos um erro',
        description: error.response.data.error,
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    }

  }

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
          fontSize={["14", "16", "20"]}
          py="2"
          color="blue.600"
          letterSpacing="tighter"
          textTransform="uppercase"
        >Cadastra-se revendedor</Text>

        <VStack my="6" spacing={["2", "4"]} w="100%">
          <Input name="name" value={name} onChange={(e) => setName(e.target.value) } type="name" label="Nome completo"/>
          <Input name="cpf" value={cpfMask(cpf)} onChange={(e) => setCpf(e.target.value) } type="text" label="CPF"/>
          <Input name="email" value={email} onChange={(e) => setEmail(e.target.value) } type="email" label="E-mail"/>
          <Input name="password" value={password} onChange={(e) => setPassword(e.target.value) } type="password" label="Senha"/>
        </VStack>

        <Button colorScheme="whatsapp" w="100%" mb="4" onClick={handleForm}>Cadastrar</Button>

        <Button w="100%" colorScheme="linkedin"onClick={() => userHistory.push("/")}>
          Fazer login
        </Button>
      </Flex>
    </PublicLayout>
  )
}