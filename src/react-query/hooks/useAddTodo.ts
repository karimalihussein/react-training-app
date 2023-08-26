import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ITodo } from "./useTodos";
import { CACHE_KEY_TODOS } from "../constants";
import ApiClient from "../services/ApiClient";

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    const apiClient = new ApiClient<ITodo>('/todos');
    return useMutation({
        mutationFn: (todo: ITodo) => apiClient.post(todo),
        onMutate: (newTodo: ITodo) => {
            const previousTodos = queryClient.getQueryData<ITodo[]>(CACHE_KEY_TODOS) || [];
            queryClient.setQueryData<ITodo[]>(['todos'], (todos = []) => [newTodo, ...todos]);
            onAdd();
            return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<ITodo[]>(CACHE_KEY_TODOS, (todos) => todos?.map((todo) => todo === newTodo ? savedTodo : todo));
        },
        onError: (error, newTodo, context) => {
            if (!context) return;
            queryClient.setQueryData<ITodo[]>(CACHE_KEY_TODOS, context.previousTodos);
        }
    });
};


export default useAddTodo;