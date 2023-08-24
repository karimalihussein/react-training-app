import { Heading } from '@chakra-ui/react';
import { IGameQuery } from '../../App';


interface GameHeadingProps {
    gameQuery: IGameQuery
}


const GameHeading = ({ gameQuery }: GameHeadingProps) => {
    const heading = `${gameQuery.genre?.name ?? 'All'} Games ${gameQuery.platform?.name ?? ''} ${gameQuery.sortOrder ? `Sorted by ${gameQuery.sortOrder}` : ''}`;
  return (
    <Heading as="h1" padding="10px">{heading}</Heading>
  )
}

export default GameHeading;