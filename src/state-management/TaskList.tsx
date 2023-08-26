import { Button } from "@chakra-ui/react";
import { useReducer, useState } from "react";
import tasksReducer from "./reducers/tasksReducer";

const TaskList = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);
    return (
        <>
            <button onClick={() => dispatch({ type: "ADD", task: { name: "Task", id: Date.now() } })} className="btn btn-primary my-3">Add Task</button>
            <ul className="list-group">
                {tasks.map((task) => (
                    <li key={task.id} className="list-group-item">
                        <div className="d-flex justify-content-between">
                            <span>{task.name}</span>
                            <Button onClick={() => dispatch({ type: "REMOVE", id: task.id })} colorScheme="red">Delete</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TaskList;