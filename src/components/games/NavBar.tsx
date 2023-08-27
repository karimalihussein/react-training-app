import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/logo.webp';
import { ColorModeSwitch } from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <HStack  padding='10px'>
        < Image src={logo} alt="logo" boxSize='60px' onClick={() => window.location.href = '/'} />
        <SearchInput  />
        <ColorModeSwitch />
    </HStack>
  )
}

