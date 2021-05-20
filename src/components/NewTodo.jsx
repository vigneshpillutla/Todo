import React, { useEffect, useRef, useState } from 'react';
import '../css/NewTodo.css';
import {useTheme} from './ThemeProvider'
const NewTodo = (props)=>{
    const {onClick:setTodoList} = props
    const [focusedInput,setFocusedInput] = useState(false);
    const [todoContent,setTodoContent] = useState("");
    const newTodoRef = useRef();
    const {todoListBg,checkBorder,textColor} = useTheme()
    useEffect(()=>{
        document.addEventListener('click',handleDocumentClick);
        document.addEventListener('keyup',handleKeyboardPress);
        return ()=> {
            document.removeEventListener('click',handleDocumentClick)
            document.removeEventListener('keyup',handleKeyboardPress);
        };
    })
    const handleKeyboardPress = (event)=>{
        if(event.keyCode === 13){
            handleNewTodo();
        }
    }
    const handleDocumentClick=(e)=>{
        setFocusedInput(newTodoRef.current?.contains(e.target));
    }
    const handleInputChange = (e)=>{
        setTodoContent(e.target.value);
    }
    const handleNewTodo = ()=>{
        if(todoContent.trim()){
            setTodoContent("");
            setTodoList(prev=>{
                let updatedTodos = [...prev];
                updatedTodos.push({
                    key:Date.now(),
                    content:todoContent,
                    completed:false
                });
                return updatedTodos;
            })
        }
        setFocusedInput(false);
    }
    return (
        <div ref={newTodoRef} className="newTodo" style={{background:todoListBg}}>
            <div style={{border:checkBorder}}></div>
            <input style={{color:textColor}} onChange={handleInputChange} onFocus={()=>setFocusedInput(true)}  className="newTodoText"  type="text" placeholder='Create new todo...'  value={todoContent}/>
            <button onClick={handleNewTodo} style={{display:focusedInput?"":"none"}}>+</button>
        </div>
    )
}
export default NewTodo;