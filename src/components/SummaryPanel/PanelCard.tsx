import React from 'react'
import { Flex, Box, Text, Icon as ChakraIcon } from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

interface PanelCardProps {
  title: string;
  content: string;
  icon: IconType;
}

export function PanelCard({ title, content, icon }: PanelCardProps) {
  return (
    <Flex
      w={["95%", "100%"]}
      h={["28", "36"]}
      bg="facebook.50"
      px={["8", "8", "10"]}
      py="1"
      borderRadius={12}
      boxShadow="lg"
      direction="column"
      justify="space-between"
    >
      <Box
        as="header"
        display="flex"
        alignContent="center"
        justifyContent="space-between"
        pt={["2", "2", "4"]}
      >
        <Text
          textAlign="left"
          color="gray.600"
          fontWeight="thin"
          fontSize={["24", "24", "26"]}
        >
          {title}
        </Text>
        <ChakraIcon as={icon} color="green.500" fontSize={["24", "24", "30"]}/>
      </Box>

      <Text
        mt="auto"
        textAlign="left"
        color="gray.600"
        fontWeight="500"
        fontSize={["28", "28", "34"]}
      >
        {content}
      </Text>
    </Flex>      
  )
}