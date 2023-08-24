import useGames from "../../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { IGenre } from "../../hooks/useGenres";
import { IPlatform } from "../../hooks/usePlatforms";
import { IGameQuery } from "../../App";


interface IGameGridProps {
  gameQuery: IGameQuery;
}

export const GameGrid = ({ gameQuery }: IGameGridProps) => {
  const { data, loading, error } = useGames(gameQuery);
  const skeletions = [1, 2, 3, 4, 5, 4];
  if(error) return <Text> {error} </Text>
  return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={6}>
        {loading  && skeletions.map((skeletion) => ( <GameCardContainer key={skeletion}> <GameCardSkeleton  /> </GameCardContainer> ))}
        {!loading && !error && data.length === 0 && <div>No games found</div>}
        {data.map((game) => ( <GameCardContainer key={game.id}> <GameCard  game={game} /> </GameCardContainer> ))}
      </SimpleGrid>
  );
};
