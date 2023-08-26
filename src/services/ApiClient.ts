import axios from "axios";

export interface IFetchResponse<T> {
    count: number;
    results: T[];
  }

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        'key': 'd47018fb2847427bad40c1162df4a9fd'
    }
});

export default apiClient;