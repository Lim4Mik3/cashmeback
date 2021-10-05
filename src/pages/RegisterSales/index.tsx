import React from 'react'
import { Text } from "@chakra-ui/react"

import { PrivateLayout } from '../../components/Layouts/PrivateLayout'

export function RegisterSales() {
  return (
    <PrivateLayout>
      <Text color="gray.900">Bem vindo ao register sales</Text>
    </PrivateLayout>
  )
}