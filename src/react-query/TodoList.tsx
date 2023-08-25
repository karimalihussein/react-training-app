import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useTodos from "./hooks/useTodos";



const TodoList = () => {
    const { data, error, isLoading } = useTodos();
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
