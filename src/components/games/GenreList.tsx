import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { IGenre } from '../../hooks/useGenres';
import getCroppedImageUrl from '../../services/ImageUrl';
import useGameQueryStore from '../../store';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);
  if(error) return null;
  if (isLoading) return <Spinner />;
  return (
    <div>
      {!isLoading && !error && data?.results.length === 0 && <div>No genres found</div>}
      <Heading as="h3" size="md" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre: IGenre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image src={getCroppedImageUrl(genre.image_background, 600, 400)} alt={genre.name} boxSize={'32px'} borderRadius={8}  objectFit={'cover'} />
              <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenreId ? "bold" : "normal"} onClick={() => setSelectedGenreId(genre.id)} fontSize="md" variant="link">
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
