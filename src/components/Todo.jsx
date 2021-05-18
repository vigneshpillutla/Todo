import React, { useState } from 'react';
import '../css/Todo.css'
import useWindowDimensions from './useWindowDimentions.js'
import check from '../images/check.svg'
const Todo = (props)=>{
    const {item,handleTodoToggle,removeTodo} = props
    const [showButton,setShowButon] = useState(false);
    const gradientBg = 'linear-gradient(90deg, #D66D75 0%, rgba(226, 149, 135, 0.53) 100%)';
    const {width} = useWindowDimensions()
    return (
        <div className="todo" onMouseEnter={()=>setShowButon(true)} onMouseLeave={()=>setShowButon(false)}>
            <div style={{background:item.completed?gradientBg:'white'}} className="circle" onClick={()=>handleTodoToggle(item)}> 
                <img style={{display:item.completed?'':'none'}} src={check} alt="" />
            </div>
            <div style={{opacity:item.completed?'60%':'100%',textDecoration:item.completed?'line-through':''}}  className="content"><p>{item.content}</p></div>
            <button style={{display:(showButton || width<1250)?"":"none"}} onClick={()=>removeTodo(item)}>X</button>
        </div>
    )
}
export default Todo;