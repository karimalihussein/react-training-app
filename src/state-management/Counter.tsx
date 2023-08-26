import { useReducer } from 'react';
import counterReducer from './reducers/counterReducer';

const Counter = () => {
    const [value, dispatch] = useReducer(counterReducer, 0);
    return (
        <div>
            Counter value: {value}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        </div>
    );
}

export default Counter;