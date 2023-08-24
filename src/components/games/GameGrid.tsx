import useGames from "../../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

export const GameGrid = () => {
  const { data, loading, error } = useGames();
  const skeletions = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <div>Something went wrong</div>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={10}>
        {loading  && skeletions.map((skeletion) => ( <GameCardContainer> <GameCardSkeleton key={skeletion} /> </GameCardContainer> ))}
        {!loading && !error && data.length === 0 && <div>No games found</div>}
        {data.map((game) => ( <GameCardContainer> <GameCard key={game.id} game={game} /> </GameCardContainer> ))}
      </SimpleGrid>
    </div>
  );
};
