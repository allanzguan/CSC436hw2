import { useState, useEffect } from "react"
import { useResource } from 'react-request-hook'



const timeNow = new Date(Date.now()).toString();
export default function Todo ({ title, content, author, dispatch, id, time }) {
    //export default function Todo ({ title, content, author }) {
    const [complete, setComplete] = useState(false);

    

    const [todos, deleteTodo] = useResource(() => ({
        url: "/todos/"+id,
        method: "DELETE",
        data: id,
      }));

    const [times, updateTodo] = useResource(() => ({
        url: "/todos/"+id,
        method: "PATCH",
        data: {"completedTime": timeNow},
    }));
  
    
    return (
    <div>
    <h3>{title}</h3>
    <div>{content}</div>
    <br />
    <i>Written by <b>{author}</b></i>
    <div>Created on: {time}</div>
    <div>Completed on: </div>

    <div>
    <label id={title}></label>    

    <input type="checkbox" value={false} onChange={(event)=>setComplete(event.target.value)} onClick={(event)=>{ event.preventDefault();


        if(!complete){
            dispatch({type: "TOGGLE_TODO", complete, title})
            setComplete(true);
            updateTodo();
        }
        else{
            dispatch({type: "TOGGLE_TODO", complete, title})
            setComplete(false);
            updateTodo();
        }        
        
    }
    }/>
    <br/>
    <input type="submit" value="Delete" onClick={(event)=>{ event.preventDefault();
        deleteTodo();
   
        //dispatch({type: "DELETE_TODO", title})
    }} />
    </div>
    
    
    </div>
    )
    }

    