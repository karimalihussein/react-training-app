import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../../store';

const SortSelector = () => {
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);
  const sortOrders = [
    { name: 'Relevance', value: '' },
    { name: 'Date Added', value: '-added' },
    { name: 'Name', value: '-name' },
    { name: 'Release Date', value: '-released' },
    { name: 'Popularity', value: '-metacritic' },
    { name: 'Average Rating', value: '-rating' },
  ];

  const currentSortOrder = sortOrders.find((sort) => sort.value === sortOrder);
 
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order By: { currentSortOrder ? currentSortOrder.name : 'Relevance' }
        </MenuButton>
        <MenuList>
            {sortOrders.map((sortOrder) => <MenuItem onClick={() => setSortOrder(sortOrder.value)} key={sortOrder.value}>{sortOrder.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default SortSelector