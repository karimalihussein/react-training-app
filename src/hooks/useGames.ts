import { useInfiniteQuery } from '@tanstack/react-query';
import { IGenre } from './useGenres';
import APIClient, { IFetchResponse } from '../services/ApiClient';
import { IPlatform } from './usePlatforms';
import ms from 'ms';
import useGameQueryStore from '../store';
const apiClient = new APIClient<IGame>('/games');

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

const useGames = () => {
  const gameQuery = useGameQueryStore(state => state.gameQuery);
  return useInfiniteQuery<IFetchResponse<IGame>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.get({ 
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
     }),
    getNextPageParam: (lastPage, pages) => {
        return lastPage.next ? pages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });
}


export default useGames;
