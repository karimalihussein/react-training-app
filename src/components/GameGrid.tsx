import { useEffect, useState } from "react";
import apiClient from "../services/ApiClient";
import useGames from "../hooks/useGames";

export const GameGrid = () => {
  const { games, loading, error } = useGames();
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};
