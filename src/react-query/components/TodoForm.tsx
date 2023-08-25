import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useRef } from 'react'
import { ITodo } from '../hooks/useTodos';
import axios from 'axios';

const TodoForm = () => {
    const ref = useRef<HTMLInputElement>(null);
    const queryClient = useQueryClient();
    const addTodo = useMutation({
        mutationFn: (todo: ITodo) => axios.post<ITodo>('https://jsonplaceholder.typicode.com/todos', todo).then((res) => res.data).catch((err) => { throw err }),
        onSuccess: (savedTodo, newTodo) => {
            // APPROACH 1: Refetch the data
            // queryClient.invalidateQueries({ queryKey: 'todos' });
            // APPROACH 2: Update the data locally
            queryClient.setQueryData<ITodo[]>(['todos'], todos => [savedTodo, ...(todos|| [])]);
        }
    });
    return (
        <form className='row mb-3' onSubmit={(event) => {
            event.preventDefault();
            if(!ref.current?.value) return alert('Please enter a todo title');
            addTodo.mutate({
                id: 0,
                title: ref.current?.value,
                completed: false,
                userId: 1
            })
        }}>

            <div className="col">
                <input type="text" className='form-control' ref={ref} />
            </div>
            <div className="col">
                <button className='btn btn-primary'>Add Todo</button>
            </div>
        </form>
    )
}

export default TodoForm