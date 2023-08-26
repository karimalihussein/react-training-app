import { useQuery } from "@tanstack/react-query";
import { IGameQuery } from "../App";
import { IGenre } from "./useGenres";
import apiClient, { IFetchResponse } from "../services/ApiClient";

export interface IPlatformGames {
  id: number;
  name: string;
  slug: string;
  icon: string;
}

export interface IGame {
  id: number;
  name: string;
  slug: string;
  released: string;
  tba: boolean;
  background_image: string;
  parent_platforms: { platform: IPlatformGames }[];
  metacritic: number;
  genres: IGenre[];
}

const useGames = (gameQuery: IGameQuery) =>
  useQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<IFetchResponse<IGame>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
