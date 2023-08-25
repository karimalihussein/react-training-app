import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const TodoList = () => {
    const fetchTodos = () => axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos').then((res) => res.data);
    const { data, error, isLoading } = useQuery<ITodo[], Error >({queryKey: ['todos'], queryFn: fetchTodos});

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>{ error.message }</p>;

    return (
        <ul className="list-group">
            {data?.map((todo) => (
                <li className="list-group-item" key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
