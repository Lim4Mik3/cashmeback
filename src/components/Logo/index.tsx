import React from 'react'
import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text
      fontSize={["18", "26", "28"]}
      color="gray.900"
      fontWeight="light"
      letterSpacing="tight"
    >
    Cashme
      <Text
        color="whatsapp.500"
        display="inline-block"
        fontWeight="bold"
      >
        BACK 🤑
    </Text>
  </Text>
  )
}
