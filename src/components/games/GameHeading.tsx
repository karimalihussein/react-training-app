import { Heading } from '@chakra-ui/react';
import { IGameQuery } from '../../App';
import useGenres from '../../hooks/useGenres';
import useGenre from '../../hooks/useGenre';
import usePlatform from '../../hooks/usePlatform';


interface GameHeadingProps {
    gameQuery: IGameQuery
}


const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genreId = gameQuery.genreId;
  const platformId = gameQuery.platformId;
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);
  const heading = `${genre?.name ?? 'All'} Games ${platform?.name ?? ''} ${gameQuery.sortOrder ? `Sorted by ${gameQuery.sortOrder}` : ''}`;
  return (
    <Heading as="h1" padding="10px">{heading}</Heading>
  )
}

export default GameHeading;