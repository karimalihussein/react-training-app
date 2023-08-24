import { useEffect, useState } from "react";
import apiClient from "../services/ApiClient";
import { CanceledError } from "axios";

export interface Platform {
    id: number;
    name: string;
    slug: string;
    icon: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  tba: boolean;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);
  return { games, error, loading };
};

export default useGames;
