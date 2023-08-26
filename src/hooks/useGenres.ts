import { useQuery } from '@tanstack/react-query';
import APIClient, { IFetchResponse } from '../services/ApiClient';
import genres from '../data/genres';

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
    staleTime: 24 * 60 * 60 * 1000, // 24h
    cacheTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
});

export default useGenres;
