import { useContext, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authcontexts";

const LoginStatus = () => {
   const { user, dispatch } = useContext(AuthContext)
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