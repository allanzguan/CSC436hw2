import { useReducer } from 'react';
import CreatePost from './Post/CreateTodo';
import PostList from './Post/TodoList';
import UserBar from './user/UserBar';
import appReducer from './reducer';

function App() {
  

  const initalTodos = [

  ]

  //const [user, setUser] = useState('');

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initalTodos,
  });

  //const [todos, setTodos] = useState(initalTodos);


  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch}/>
      <PostList todos={state.todos} />
      {state.user && <CreatePost user={state.user} todos={state.todos} dispatch={dispatch} /> }
    </div>
    
  )
}


export default App;
