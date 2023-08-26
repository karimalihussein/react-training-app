import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
  useInfiniteQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.get({ 
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
     }),
    getNextPageParam: (lastPage, pages) => {
        return lastPage.next ? pages.length + 1 : undefined;
    }
  });

export default useGames;
