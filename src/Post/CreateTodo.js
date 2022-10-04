import { useState } from "react"

export default function CreateTodo ({user, todos, setTodos}) {
    const [title, setTitle] = useState("");
    const [ content, setContent] = useState("");


    return (
    <form onSubmit={e => {
        e.preventDefault();
        const newTodo = {
            title,
            content,
            author: user,
        };
        setTodos([newTodo, ...todos]);
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

    