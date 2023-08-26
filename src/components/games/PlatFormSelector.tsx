import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown, BsChevronDown } from 'react-icons/bs'
import usePlatforms, { IPlatform } from '../../hooks/usePlatforms'


interface IPlatFormSelectorProps {
  onSelectPlatform: (platform: IPlatform) => void;
  selectedPlatform: IPlatform | null;
}


const PlatFormSelector = ({ onSelectPlatform, selectedPlatform }: IPlatFormSelectorProps) => {
  const { data, error } = usePlatforms(); 

  if(error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform ? selectedPlatform.name : 'Platforms'}
        </MenuButton>
        <MenuList>
            {data?.results.map((platform) => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatFormSelector