import React, { useEffect, useRef, useState } from 'react';
import './NewTodo.css';
const NewTodo = ()=>{
    const [focusedInput,setFocusedInput] = useState(false);
    const [todoContent,setTodoContent] = useState("");
    const newTodoRef = useRef();
    useEffect(()=>{
        document.addEventListener('click',handleDocumentClick);
    },[])
    const handleDocumentClick=(e)=>{
        setFocusedInput(newTodoRef.current.contains(e.target));
    }
    const handleInputChange = (e)=>{
        setTodoContent(e.target.value);
    }
    const handleNewTodo = ()=>{
        console.log(todoContent);
        setTodoContent("");
        setFocusedInput(false);
    }
    return (
        <div ref={newTodoRef} className="newTodo">
            <div></div>
            <input onChange={handleInputChange} onFocus={()=>setFocusedInput(true)}  className="newTodoText"  type="text" placeholder='Create new todo...'  value={todoContent}/>
            <button onClick={handleNewTodo} style={{display:focusedInput?"":"none"}}>+</button>
        </div>
    )
}
export default NewTodo;