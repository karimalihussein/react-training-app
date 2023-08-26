import { useQuery } from '@tanstack/react-query';
import APIClient, { IFetchResponse } from '../services/ApiClient';
import genres from '../data/genres';
import ms from 'ms';

const apiClient = new APIClient<IGenre>('/genres');

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.get,
    staleTime: ms('24h'),
    cacheTime: ms('24h'),
    initialData: genres,
});

export default useGenres;
