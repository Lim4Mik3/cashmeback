import React from 'react'
import { Box, Text, Avatar } from '@chakra-ui/react'
 
export function Profile() {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <Text
        fontSize="18"
        color="gray.900"
        textAlign="right"
        lineHeight="6"
      >
        Leonardo Oliveira
        <Text
          display="block"
          fontSize="12"
        >
          <Text color="whatsapp.700" fontSize="12" fontWeight="bold" letterSpacing="wider">REVENDEDOR</Text>
        </Text>
      </Text>
      <Avatar ml="4" name="Leonardo Oliveira"/>
    </Box>
  )
}