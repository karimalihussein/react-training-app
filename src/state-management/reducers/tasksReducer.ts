interface ITask {
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

type IAction = IAddTaskAction | IRemoveTaskAction;

const tasksReducer = (tasks: ITask[] = [], action: IAction) => {
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