import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGeneres, { IGenre } from "../../../hooks/useGeneres";
import getCroppedImageUrl from "../../../services/ImageUrl";

const GenereList = () => {
  const { data, loading, error } = useGeneres();
  return (
    <div>
      {error && <div>Something went wrong</div>}
      {loading && <div>Loading...</div>}
      {!loading && !error && data.length === 0 && <div>No genres found</div>}
      <List>
        {data.map((genre: IGenre) => (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack>
              <Image src={getCroppedImageUrl(genre.image_background, 600, 400)} alt={genre.name} boxSize={'32px'} borderRadius={8} />
              <Text fontSize={'lg'}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenereList;
