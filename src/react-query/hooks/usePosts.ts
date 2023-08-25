import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IPostQuery {
    page: number;
    limit: number;
}

const usePosts = (query: IPostQuery) => {
    const fetchData = () => axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
            _start: (query.page - 1) * query.limit,
            _limit: query.limit
        }
    }).then((res) => res.data);
    return useQuery<IPost[], Error >({
        queryKey: ['posts', query],
        queryFn: fetchData, 
        staleTime: 1 * 60 * 1000
    });
};

export default usePosts;