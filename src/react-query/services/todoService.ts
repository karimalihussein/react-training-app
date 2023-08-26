import APIClient from "./ApiClient";

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export default new APIClient<ITodo>('/todos');
