import { useQuery } from "@tanstack/react-query";
import APIClient, { IFetchResponse } from '../services/ApiClient';
import platforms from "../data/platforms";

const apiClient = new APIClient<IPlatform>('/platforms/lists/parents');

export interface IPlatform {
    id: number;
    name: string;
    slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.get,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms,
  });

export default usePlatforms;