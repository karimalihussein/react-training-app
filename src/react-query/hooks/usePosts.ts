import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const usePosts = () => {
    const fetchData = () => axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').then((res) => res.data);
    return useQuery<IPost[], Error >({queryKey: ['posts'], queryFn: fetchData, staleTime: 1 * 60 * 1000});
};

export default usePosts;