import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../constants';
import ApiClient from '../services/ApiClient';

const apiClient = new ApiClient<ITodo[]>('/todos');

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const useTodos = () => {
    return useQuery<ITodo[], Error>({ queryKey: CACHE_KEY_TODOS, queryFn: apiClient.getAll, staleTime: 10 * 1000 });
};

export default useTodos;