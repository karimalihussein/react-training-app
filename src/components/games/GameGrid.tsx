import useGames from "../../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, loading, error } = useGames();
  const skeletions = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {error && <div>Something went wrong</div>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={10}>
        {loading  && skeletions.map((skeletion) => (<GameCardSkeleton key={skeletion} />))}
        {games.map((game) => (<GameCard game={game} />))}
      </SimpleGrid>
    </div>
  );
};
