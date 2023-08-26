interface IAction {
    type: 'INCREMENT' | 'DECREMENT' | 'RESET';
}

const counterReducer = (state: number, action: IAction): number => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state -1;
        default:
            return state = 0;
    }
};

export default counterReducer;