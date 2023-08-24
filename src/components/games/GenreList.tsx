import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { IGenre } from '../../hooks/useGenres';
import getCroppedImageUrl from '../../services/ImageUrl';

interface GenreListProps {
  onSelectGenre: (genre: IGenre) => void;
  selectedGenre: IGenre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
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
              <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelectGenre(genre)} fontSize="md" variant="link">
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
