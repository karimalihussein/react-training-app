import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { ITodo } from "../services/todoService";

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (todo: ITodo) => todoService.post(todo),
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