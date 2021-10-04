import * as React from "react"
import { ChakraProvider, Box, Text } from "@chakra-ui/react"
import { theme } from './styles/theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box
      h="100vh"
    >
      <Text>Olá</Text>
    </Box>
  </ChakraProvider>
)
