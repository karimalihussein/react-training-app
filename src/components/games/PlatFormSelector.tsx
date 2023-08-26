import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown, BsChevronDown } from 'react-icons/bs'
import usePlatforms, { IPlatform } from '../../hooks/usePlatforms'
import usePlatform from '../../hooks/usePlatform';


interface IPlatFormSelectorProps {
  onSelectPlatform: (platform: IPlatform) => void;
  selectedPlatformId?: number;
}


const PlatFormSelector = ({ onSelectPlatform, selectedPlatformId }: IPlatFormSelectorProps) => {
  const { data, error } = usePlatforms(); 
  const selectedPlatform = usePlatform(selectedPlatformId);
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