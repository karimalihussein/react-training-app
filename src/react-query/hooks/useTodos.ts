import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const useTodos = () => {
    const fetchTodos = () => axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').then((res) => res.data);
    return useQuery<ITodo[], Error >({queryKey: ['todos'], queryFn: fetchTodos});
};

export default useTodos;