import { useQuery } from "@tanstack/react-query";
import { IGameQuery } from "../App";
import { IGenre } from "./useGenres";
import APIClient, { IFetchResponse } from "../services/ApiClient";
import { IPlatform } from "./usePlatforms";

const apiClient = new APIClient<IGame>("/games");

export interface IGame {
  id: number;
  name: string;
  slug: string;
  released: string;
  tba: boolean;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  genres: IGenre[];
}

const useGames = (gameQuery: IGameQuery) =>
  useQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () => apiClient.get({ 
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
     }),
  });

export default useGames;
