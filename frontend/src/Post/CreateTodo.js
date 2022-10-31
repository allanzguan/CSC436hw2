import { useState } from "react"
import { v4 as uuidv4} from "uuid"; 
import { useContext } from "react";
import { StateContext } from "../context";
import { useResource } from 'react-request-hook'


export default function CreateTodo () {
    const [ title, setTitle] = useState("");
    const [ content, setContent] = useState("");
    const {state, dispatch} = useContext(StateContext);
    const {user} = state;   
    const timeNow = new Date(Date.now()).toString();
    const completedTime = "";

    const [todos, createTodo] = useResource(({title, content, author}) => ({
        url: "/todos",
        method: "post",
        data: {title, content, author, timeNow, completedTime},
      }));

    return (
    <form onSubmit={e => {
        e.preventDefault();
        //dispatch({ type: "CREATE_TODO", title, content, author: user });
        createTodo({title, content, author: user});
        const resultID = todos.data.id;
        
        dispatch({type:"CREATE_TODO", title, content, author: user, dispatch, id: resultID , timeNow});
        
//        const newTodo = {
//            title,
//            content,
//            author: user,
//        };
//        setTodos([newTodo, ...todos]);
    }}>
        
        <div>Author: <b>{user}</b></div>
        <div>
            <label htmlFor="create-title">Title:</label>
            <input type="text" name="create-title" id="create-title" value ={title} onChange={(event) => setTitle(event.target.value)}/>
        </div>
        <textarea value ={content} onChange={(event) => setContent(event.target.value)}/>
        <input type="submit" value="Create" />
    </form>
    )
    }

    