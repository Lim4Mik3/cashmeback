import React from 'react'
import { Box, Text, Icon, Button, useBreakpointValue } from '@chakra-ui/react'
import { CgLogOff } from 'react-icons/cg'
 
export function Profile() {
  const isWideVersion = useBreakpointValue({ sm: false, md: true })

  return (
    <Box display="flex" alignItems="center">
      
      { isWideVersion && (
        <Text
          fontSize="18"
          color="gray.900"
          textAlign="right"
          lineHeight="6"
        >
        Leonardo Oliveira
          <Text 
            color="whatsapp.700" 
            display="block" 
            fontSize="12" 
            fontWeight="bold" 
            letterSpacing="wider"
          >
            REVENDEDOR
          </Text>
        </Text>
      ) }

      <Button
        w={["40px", "50px"]}        
        h={["40px", "50px"]}        
        ml="4"
        borderRadius="full"
        bg="whatsapp.700"
        align="center"
        justify="center"
        title="Sair"
        _hover={{
          bg: "whatsapp.800"
        }}
      >
        <Icon as={CgLogOff} fontSize={["20", "26"]} fontWeight="bold" />
      </Button>
    </Box>
  )
}