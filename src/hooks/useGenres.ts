import { useQuery } from '@tanstack/react-query';
import apiClient, { IFetchResponse } from '../services/ApiClient';
import genres from '../data/genres';

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'], 
  queryFn: () => apiClient.get<IFetchResponse<IGenre>>('/genres').then(({ data }) => data),
  staleTime: 24 * 60 * 60 * 1000,// 24 hours
  cacheTime: 24 * 60 * 60 * 1000,// 24 hours
  initialData: genres
  })

export default useGenres;
