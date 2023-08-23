import axios from "axios";


const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        'key': 'd47018fb2847427bad40c1162df4a9fd'
    }
});

export default apiClient;