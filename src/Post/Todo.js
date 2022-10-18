import { useState } from "react"



const timeNow = new Date(Date.now()).toString();
export default function Todo ({ title, content, author, dispatch }) {
    //export default function Todo ({ title, content, author }) {
    const [complete, setComplete] = useState(false);
  
    return (
    <div>
    <h3>{title}</h3>
    <div>{content}</div>
    <br />
    <i>Written by <b>{author}</b></i>
    <div>Created on: {timeNow}</div>
    <div>
    <label id={title}></label>    

    <input type="checkbox" value={false} onChange={(event)=>setComplete(event.target.value)} onClick={(event)=>{ event.preventDefault();
        if(!complete){
            dispatch({type: "TOGGLE_TODO", complete, title})
            setComplete(true);
        }
        else{
            dispatch({type: "TOGGLE_TODO", complete, title})
            setComplete(false);
        }        
        
    }
    }/>
    <br/>
    <input type="submit" value="Delete" onClick={(event)=>{ event.preventDefault();
        
        dispatch({type: "DELETE_TODO", title})
    }} />
    </div>
    
    
    </div>
    )
    }

    