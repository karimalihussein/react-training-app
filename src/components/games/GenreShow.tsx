import { Badge } from "@chakra-ui/react";
import { IGenre } from "../../hooks/useGenres";

interface Props {
    genres: IGenre[];
}
const GenreShow = ({ genres }: Props) => {
  return (
    <Badge fontSize={'14px'} paddingX={2} borderRadius={'4px'} colorScheme={'green'}>
      {genres.map((genre) => genre.name).join(', ')}
    </Badge>
  )
}

export default GenreShow;