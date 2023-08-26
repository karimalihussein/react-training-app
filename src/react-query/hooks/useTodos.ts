import { useQuery } from '@tanstack/react-query';
import { CACHE_KEY_TODOS } from '../constants';
import ApiClient from '../services/ApiClient';
import todoService, { ITodo } from "../services/todoService";
 

const useTodos = () => {
    return useQuery<ITodo[], Error>({ queryKey: CACHE_KEY_TODOS, queryFn: todoService.getAll, staleTime: 10 * 1000 });
};

export default useTodos;