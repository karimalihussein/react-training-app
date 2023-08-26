import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

class ApiClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = () =>  {
        return axiosInstance.get<T[]>(this.endpoint).then((response) => response.data).catch((err) => { throw err });
    }

    post = (data: T) => {
        return axiosInstance.post<T>(this.endpoint, data).then((response) => response.data).catch((err) => { throw err });
    }
}

export default ApiClient;
