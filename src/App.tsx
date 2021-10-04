import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from './styles/theme'
import { Routes } from "./Routes"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes />
  </ChakraProvider>
)
