import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '767px',
  md: '1024px',
  lg: '1920px',
  xl: '1920px'
})


export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "linear-gradient(157deg, rgba(123,203,212,1) 0%, rgba(41,198,183,1) 100%)"
      },
      Th: {
        color: "gray.900",
        fontSize: "14"
      },
      Td: {
        color: "gray.700",
        fontSize: "20"
      }
    }
  },
  fonts: {
    body: "Roboto",
    heading: "Roboto",
  },
}, breakpoints)