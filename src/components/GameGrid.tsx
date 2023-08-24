import { useEffect, useState } from "react";
import apiClient from "../services/ApiClient";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

export const GameGrid = () => {
  const { games, loading, error } = useGames();
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      

      <SimpleGrid columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 5
      }} 
      padding={'10px'}
      spacing={10}>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>

    </div>
  );
};
