import React from 'react'
import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Dashboard() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      direction="column"
    >
      <Flex
        as="header"
        w="100%"
        h="20"
        bg="whiteAlpha.800"
        align="center"
        justify="center"
        boxShadow="lg"
        zIndex="9"
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

      </Flex>

      <Flex
        as="main"
        maxW={1280}
        w="100%"
        // bg="whitesmoke"
        h="100%"
        my="0"
        mx="auto"
        p="4"
      >
        
      </Flex>


    </Flex>
  )
}