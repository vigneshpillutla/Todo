import React, { useState } from 'react';
import '../css/Todo.css';
import check from '../images/check.svg'
import {useTheme} from './ThemeProvider'
const Todo = (props)=>{
    const {item,handleTodoToggle,removeTodo,width} = props
    const [showButton,setShowButon] = useState(false);
    const {todoListBg,checkedTodoColor,checkBorder,textColor} = useTheme()
    return (
        <div className="todo" onMouseEnter={()=>setShowButon(true)} onMouseLeave={()=>setShowButon(false)} style={{color:textColor}}>
            <div style={{background:item.completed?checkedTodoColor:todoListBg,border:item.completed?'none':checkBorder}} className="circle" onClick={()=>handleTodoToggle(item)}> 
                <img style={{display:item.completed?'':'none'}} src={check} alt="" />
            </div>
            <div style={{opacity:item.completed?'60%':'100%',textDecoration:item.completed?'line-through':''}}  className="content"><p>{item.content}</p></div>
            <button style={{display:(showButton || width<1250)?"":"none"}} onClick={()=>removeTodo(item)}>X</button>
        </div>
    )
}
export default Todo;