interface iLoginAction {
    type: 'LOGIN';
    username: string;
}

interface iLogoutAction {
    type: 'LOGOUT';
}

export type AuthAction = iLoginAction | iLogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
    return (action.type === 'LOGIN') ? action.username : '';
}

export default authReducer;