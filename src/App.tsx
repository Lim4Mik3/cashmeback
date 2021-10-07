import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

import { Routes } from "./Routes"
import { SessionProvider } from "./hooks/useSession"

import { theme } from './styles/theme'


export const App = () => (
  <ChakraProvider theme={theme}>
    <SessionProvider>
      <Routes />
    </SessionProvider>
  </ChakraProvider>
)
