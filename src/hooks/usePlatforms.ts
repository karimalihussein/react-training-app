import { useQuery } from "@tanstack/react-query";
import apiClient, { IFetchResponse } from "../services/ApiClient";
import platforms from "../data/platforms";

export interface IPlatform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.get<IFetchResponse<IPlatform>>('/platforms').then(({ data }) => data),
    staleTime: 24 * 60 * 60 * 1000,// 24h hours
    cacheTime: 24 * 60 * 60 * 1000,// 24h
    initialData: platforms
})

export default usePlatforms;