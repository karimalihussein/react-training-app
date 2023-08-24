import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/logo.webp';
import { ColorModeSwitch } from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface NavBarProps {
    onSearch: (value: string) => void;
};

export const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <HStack  padding='10px'>
        <Image src={logo} alt="logo" boxSize='60px' />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}

