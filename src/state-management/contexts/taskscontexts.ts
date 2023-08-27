import React, { Dispatch } from "react";
import { ITask, TaskAction } from "../reducers/tasksReducer";

interface ITasksContenxtType {
    tasks: ITask[];
    dispatch: Dispatch<TaskAction>;
}

const TasksContext =  React.createContext<ITasksContenxtType>({} as ITasksContenxtType);

export default TasksContext;