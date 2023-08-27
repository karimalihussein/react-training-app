import React, { Dispatch } from "react";
import { ITask, TaskAction } from "../reducers/tasksReducer";
import { AuthAction } from "../reducers/authReducer";

interface IAthContextType {
    user: string;
    dispatch: Dispatch<AuthAction>
}

const AuthContext =  React.createContext<IAthContextType>({} as IAthContextType);

export default AuthContext;