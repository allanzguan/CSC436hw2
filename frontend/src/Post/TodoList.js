import { useContext } from 'react'
import Todo from './Todo'
import { StateContext } from '../context'



export default function TodoList () {
const { state } = useContext(StateContext);
const { todos } = state;

return (
    // <div>
    // {todos.map((p, i) => <Todo {...p} key={p.id} />)}
    // </div>
    <div>
	{todos.length === 0 && <h2>No todos found.</h2>}
	{todos.length > 0 && todos.map((p, i) => <Todo {...p} key={p._id || p.id} />)}
    </div>

)
}

