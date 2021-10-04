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
      w="100%"
      h="36"
      bg="facebook.50"
      px="10"
      py="2"
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
        pt="4"
      >
        <Text
          textAlign="left"
          color="gray.600"
          fontWeight="thin"
          fontSize="26"
        >
          {title}
        </Text>
        <ChakraIcon as={icon} color="green.500" fontSize="30"/>
      </Box>

      <Text
        mt="auto"
        textAlign="left"
        color="gray.600"
        fontWeight="500"
        fontSize="34"
      >
        {content}
      </Text>
    </Flex>      
  )
}