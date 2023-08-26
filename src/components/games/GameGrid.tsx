import useGames from "../../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { IGameQuery } from "../../App";


interface IGameGridProps {
  gameQuery: IGameQuery;
}

export const GameGrid = ({ gameQuery }: IGameGridProps) => {
  const { data, isLoading, error } = useGames(gameQuery);
  const skeletions = [1, 2, 3, 4, 5, 4];
  if(error) return <Text> {error.message} </Text>
  return (
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={6}>
        {isLoading  && skeletions.map((skeletion) => ( <GameCardContainer key={skeletion}> <GameCardSkeleton  /> </GameCardContainer> ))}
        {!isLoading && !error && data?.results.length === 0 && <div>No games found</div>}
        {data?.results.map((game) => ( <GameCardContainer key={game.id}> <GameCard  game={game} /> </GameCardContainer> ))}
      </SimpleGrid>
  );
};
