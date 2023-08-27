export interface ITask {
    id: number;
    name: string;
}

interface IAddTaskAction {
    type: 'ADD';
    task: ITask;
}

interface IRemoveTaskAction {
    type: 'REMOVE';
    id: number;
}

export type TaskAction = IAddTaskAction | IRemoveTaskAction;

const tasksReducer = (tasks: ITask[] = [], action: TaskAction) => {
    switch (action.type) {
        case "ADD":
           return [...tasks, action.task];
        case "REMOVE":
           return tasks.filter(task => task.id !== action.id);
        default:
           return tasks;
    }
}

export default tasksReducer;