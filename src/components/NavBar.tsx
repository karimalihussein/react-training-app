import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp';
export const NavBar = () => {
  return (
    <HStack  h="100%" w="100%" justify="center" align="center">
        <Image src={logo} alt="logo" boxSize='60px' />
        <Text fontSize="2xl" fontWeight="bold" color="gray.700">React Chakra UI</Text>
    </HStack>
  )
}

