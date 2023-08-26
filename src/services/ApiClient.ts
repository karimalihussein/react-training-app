import axios, { AxiosRequestConfig } from "axios";

export interface IFetchResponse<T> {
    count: number;
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        'key': 'd47018fb2847427bad40c1162df4a9fd'
    }
});

class APIClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    get = (config: AxiosRequestConfig) => axiosInstance.get<IFetchResponse<T>>(this.endpoint, config).then(res => res.data);
}


export default APIClient;