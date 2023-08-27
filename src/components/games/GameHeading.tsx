import { Heading } from '@chakra-ui/react';
import useGenre from '../../hooks/useGenre';
import usePlatform from '../../hooks/usePlatform';
import useGameQueryStore from '../../store';


const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genre = useGenre(genreId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);
  const sortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const heading = `${genre?.name ?? 'All'} Games ${platform?.name ?? ''} ${sortOrder ? `Sorted by ${sortOrder}` : ''}`;
  return (
    <Heading as="h1" padding="10px">{heading}</Heading>
  )
}

export default GameHeading;