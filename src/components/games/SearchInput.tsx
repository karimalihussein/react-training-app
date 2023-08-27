import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';
import useGameQueryStore from '../../store';

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  return (
    <form  onSubmit={(event) => {
      event.preventDefault()
      setSearchText(ref.current?.value || '')
    }}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<BsSearch color="gray.300" />} />
          <Input ref={ref} borderRadius={20} placeholder="Search..."  variant={'filled'} />
      </InputGroup> 
    </form>
  )
}

export default SearchInput