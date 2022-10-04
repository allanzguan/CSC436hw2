import { useState } from "react"


const timeNow = new Date(Date.now()).toString();
export default function Todo ({ title, content, author }) {
    const [complete, setComplete] = useState('');
  
    return (
    <div>
    <h3>{title}</h3>
    <div>{content}</div>
    <br />
    <i>Written by <b>{author}</b></i>
    <div>Created on: {timeNow}</div>
    <div>
    <input type="checkbox" value={false} onChange={(event)=>setComplete(event.target.value)} onClick={handleComplete()}/>
    </div>
    <div id = "id2">abc</div>
    
    </div>
    )
    }

    function handleComplete(){
        var el = document.getElementById("id2");
        el.innerHTML = "hiiii";
        return false;
    }
    
    