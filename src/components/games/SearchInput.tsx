import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { useRef } from 'react';


interface SearchInputProps {
  onSearch: (value: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <form  onSubmit={(event) => {
      event.preventDefault()
      onSearch(ref.current?.value || '')
    }}>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<BsSearch color="gray.300" />} />
          <Input ref={ref} borderRadius={20} placeholder="Search..."  variant={'filled'} />
      </InputGroup> 
    </form>
  )
}

export default SearchInput