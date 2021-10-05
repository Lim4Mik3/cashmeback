import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from './styles/theme'
import { Routes } from "./Routes"
import { SessionProvider } from "./hooks/useSession"

export const App = () => (
  <ChakraProvider theme={theme}>
    <SessionProvider>
      <Routes />
    </SessionProvider>
  </ChakraProvider>
)
