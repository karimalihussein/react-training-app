import { useReducer } from "react";
import authReducer from "./reducers/authReducer";

const LoginStatus = () => {
    const [user, dispatch] = useReducer(authReducer, '');
    if(user) {
        return (
            <div>
                <p>Logged in as {user}</p>
                <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
            </div>
        );
    }
    return (
        <div>
            <p>Not logged in</p>
            <button onClick={() => dispatch({ type: 'LOGIN', username: 'John' })}>Login</button>
        </div>
    );
};

export default LoginStatus;