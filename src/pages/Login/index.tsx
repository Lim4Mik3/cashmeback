import React from 'react'
import { Box, Flex, Text, VStack, Button, Divider } from "@chakra-ui/react"
import { Input } from "../../components/Form/Input"

export function Login() {
  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      alignContent="center"
      justifyContent="center"
      p="6"
    >
      <Flex
        w={520}
        align="center"
        justify="center"
      >
        <Flex
          direction="column"
          bg="gray.200"
          w="80%"
          p="10"
          borderRadius={8}
          align="center"
          justify="center"
          boxShadow="2xl"
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

        <Text
          fontSize="18"
          py="2"
          color="blue.600"
          letterSpacing="tighter"
          textTransform="uppercase"
        >Faça login revendedor</Text>

        <VStack
          my="6"
          w="100%"
        >
          <Input 
            name="email" 
            type="email" 
            label="E-mail"
          />
          <Input 
            name="password" 
            type="password" 
            label="Senha"
          />
        </VStack>

        <Button
          colorScheme="whatsapp"
          w="100%"          
        >Entrar</Button>

        <Divider colorScheme="pink" py="2" size="lg" />

        <Button
          w="100%"   
          colorScheme="linkedin"
        >
          Criar uma conta
        </Button>

        
        </Flex>

      </Flex>
    </Box>
  )
}