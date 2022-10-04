import { useState } from 'react';
import CreatePost from './Post/CreateTodo';
import PostList from './Post/TodoList';
import UserBar from './user/UserBar';


function App() {
  

  const initalTodos = [

  ]

  const [user, setUser] = useState('');
  const [todos, setTodos] = useState(initalTodos);

  return (
    <div>
      <UserBar user={user} setUser={setUser}/>
      <PostList todos={todos} />
      {user && <CreatePost user={user} todos={todos} setTodos={setTodos} /> }
    </div>
    
  )
}


export default App;
