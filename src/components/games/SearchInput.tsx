import { Input, InputGroup, InputLeftElement, inpuntGroup } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
const SearchInput = () => {
  return (
    <InputGroup>
         <InputLeftElement pointerEvents="none" children={<BsSearch color="gray.300" />} />
        <Input borderRadius={20} placeholder="Search..."  variant={'filled'} />
    </InputGroup>
  )
}

export default SearchInput