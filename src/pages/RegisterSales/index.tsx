import React, { FormEvent, useState } from 'react'
import { Text, Flex, Button, Icon, VStack, useBreakpointValue, useToast } from "@chakra-ui/react"
import { MdArrowBack } from 'react-icons/md'
import * as yup from 'yup'

import { PrivateLayout } from '../../components/Layouts/PrivateLayout'
import { Input } from '../../components/Form/Input'
import { useHistory } from 'react-router'
import { useSales } from '../../hooks/useSales'
import { api } from '../../services/api'
import { useSession } from '../../hooks/useSession'

export function RegisterSales() {
  const [saleCode, setSaleCode] = useState('');
  const [amount, setAmount] = useState('');
  const [saleDate, setSaleDate] = useState('');

  const { userSales } = useSales();
  const { user, token } = useSession();
  const userHistory = useHistory();
  const toast = useToast();
  const isWideVersion = useBreakpointValue({ sm: false, md: true })

  const inputShape = yup.object().shape({
    saleCode: yup.string().required("O campo código da compra é obrigatório"),
    amount: yup.number().required("O campo valor é obrigatório"),
    saleDate: yup.string().required("O campo data é obrigatório"),
  })

  async function handleForm(event: FormEvent) {
    event.preventDefault();
    
    inputShape.validate({ saleCode, amount, saleDate })
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
      await api.post(`/sales?id=${user.id}`, {
        sale_code: saleCode,
        amount, 
        sale_date: saleDate
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      toast({
        title: 'Venda criada com sucesso!',
        description: "Agora ela já está listada nas novas vendas",
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: true
      })

      userHistory.push('/dashboard')
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
              { userSales.length } vendas <br /> cadastradas.
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
          <Input name="salecode" value={saleCode} onChange={(e) => setSaleCode(e.target.value)} type="text" label="Código da compra"  />
          <Input name="value" value={amount} onChange={(e) => setAmount(e.target.value) } type="number" label="Valor da compra" />
          <Input name="data" value={saleDate} onChange={(e) => setSaleDate(e.target.value) } type="date" label="Data da venda" />
          <Button
            colorScheme="whatsapp"
            w="100%"
            size="lg"
            onClick={handleForm}
          > 
            Cadastrar venda
          </Button>
        </VStack>

      </Flex>

    </PrivateLayout>
  )
}