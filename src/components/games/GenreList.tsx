import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { IGenre } from '../../hooks/useGenres';
import getCroppedImageUrl from '../../services/ImageUrl';

interface Props {
  onSelectGenre: (genre: IGenre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, loading, error } = useGenres();
  if(error) return null;
  if (loading) return <Spinner />;
  return (
    <div>
      {!loading && !error && data.length === 0 && <div>No genres found</div>}
      <List>
        {data.map((genre: IGenre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image src={getCroppedImageUrl(genre.image_background, 600, 400)} alt={genre.name} boxSize={'32px'} borderRadius={8} />
              <Button fontSize={'lg'} variant={'link'} onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
