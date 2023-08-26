import { useRef } from 'react'
import useAddTodo from '../hooks/useAddTodo';

const TodoForm = () => {
    const ref = useRef<HTMLInputElement>(null);
    const addTodo = useAddTodo(() => {
        ref.current!.value = '';
    });
    return (
        <form className='row mb-3' onSubmit={(event) => {
            event.preventDefault();
            if(!ref.current?.value) return alert('Please enter a todo title');
            addTodo.mutate({
                id: 0,
                title: ref.current?.value,
                completed: false,
                userId: 1
            })
        }}>

            <div className="col">
                <input type="text" className='form-control' ref={ref} />
            </div>
            <div className="col">
                <button className='btn btn-primary' disabled={addTodo.isLoading} >
                    { addTodo.isLoading ? 'Saving...' : 'Add Todo' }
                </button>
            </div>
        </form>
    )
}

export default TodoForm