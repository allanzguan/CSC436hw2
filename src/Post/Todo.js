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
    <label id={title}></label>    
    <input type="checkbox" value={false} onChange={(event)=>setComplete(event.target.value)} onClick={(event)=>{
        if(!complete){
            document.getElementById(title.toString()).innerHTML="Completed on: "+new Date(Date.now()).toString();
            setComplete(true);
        }
        else{
            document.getElementById(title.toString()).innerHTML="";
            setComplete(false);
        }
        
        }
        

        
        }/>
    
    </div>
    
    
    </div>
    )
    }

    