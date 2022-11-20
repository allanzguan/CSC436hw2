import { useReducer, useEffect } from 'react';
import CreatePost from './Post/CreateTodo';
import PostList from './Post/TodoList';
import UserBar from './user/UserBar';
import appReducer from './reducer';
import { v4 as uuidv4} from 'uuid';
import {StateContext} from './context'
import { useResource } from 'react-request-hook'

function App() {
  

  const initalTodos = [

  ]

  //const [user, setUser] = useState('');

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initalTodos,
    id: uuidv4(),
  });

  //const [todos, setTodos] = useState(initalTodos);

  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
    headers: { Authorization: `${state?.user?.access_token}` },
}));


  useEffect(getTodos, [state?.user?.access_token]);


  useEffect(() => {
    if (todos && todos.isLoading === false && todos.data) {
      dispatch({ type: "FETCH_TODO", todos: todos.data.reverse() });
    }
  }, [todos]);
  return (
    <div>
      <StateContext.Provider value = {{ state, dispatch }} >
      <UserBar />
      <PostList />
      {state.user && <CreatePost /> }
      </StateContext.Provider>
    </div>
    
  )
}


export default App;
