import useGames from "../../hooks/useGames";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { IGameQuery } from "../../App";
import React from "react";


interface IGameGridProps {
  gameQuery: IGameQuery;
}

export const GameGrid = ({ gameQuery }: IGameGridProps) => {
  const { data, isLoading, error, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletions = [1, 2, 3, 4, 5, 4];
  if (error) return <Text> {error.message} </Text>
  return (
    <Box padding={'10px'} >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading && skeletions.map((skeletion) => (<GameCardContainer key={skeletion}> <GameCardSkeleton /> </GameCardContainer>))}
        {!isLoading && !error && data?.pages && data?.pages.length > 0 && data?.pages[0].results.length === 0 && <Text> No games found </Text>}
        {data?.pages.map((page, index) =>
          <React.Fragment key={index} >
            {page.results.map((game) => (<GameCardContainer key={game.id}> <GameCard game={game} /> </GameCardContainer>))}
          </React.Fragment>)}
      </SimpleGrid>
      <Button marginY={5} onClick={() => fetchNextPage()} isLoading={isFetchingNextPage || !hasNextPage} loadingText="Loading more games..." disabled={!hasNextPage} > Load more </Button>
    </Box>
  );
};
