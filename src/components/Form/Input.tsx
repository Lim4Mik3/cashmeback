import React from 'react'
import { Input as ChackraInput, FormLabel, InputProps as ChakraInputProps, FormControl } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      { !!label && (<FormLabel htmlFor={name} color="black" fontSize={["20", "24"]}>{label}</FormLabel>) }

      <ChackraInput 
        name={name}
        id={name}
        focusBorderColor="whatsapp.600"
        autoComplete="off"
        bgColor="gray.300"
        variant="outline"
        color="black"
        size="md"
        fontSize="20"
        _hover={{
          bgColor: 'gray.300'
        }}        
        { ...rest }
      />
    </FormControl>
  )
}