import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "linear-gradient(157deg, rgba(123,203,212,1) 0%, rgba(41,198,183,1) 100%)"
      },
    }
  },
  fonts: {
    body: "Roboto",
    heading: "Roboto",
  },
})