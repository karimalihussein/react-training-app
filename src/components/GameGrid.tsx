import { useEffect, useState } from "react"
import apiClient from "../services/ApiClient";

interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  tba: boolean;
  background_image: string;
}


interface FetchGamesResponse { 
    count: number;
    results: Game[];
}

export const GameGrid = () => {
   const [games, setGames] = useState<Game[]>([]);
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);
   useEffect(() => {
    setLoading(true);
    apiClient.get<FetchGamesResponse>('/games').then((response) => setGames(response.data.results)).catch((error) => setError(error.message)).finally(() => setLoading(false));

   }, []);
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
  )
}
