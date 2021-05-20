import React, {useState} from 'react';
import '../css/DisplayTodo.css'
import Todo from './Todo'
import DisplayOptions from './DisplayOptions'
import useWindowDimensions from './useWindowDimentions.js'
import Options from './Options'
import {useTheme} from './ThemeProvider'
const DisplayTodo = (props)=>{
    const {handleClearCompleted,list:todoList,handleTodoToggle,removeTodo} = props;
    const [filter,setFilter] = useState('All');
    const {width} = useWindowDimensions();
    const currentTheme = useTheme();
    let filteredList = [...todoList];
    let itemsLeft = todoList.filter(item=>!item.completed).length;
    if(filter==='Active'){
        filteredList = todoList.filter(item=>!item.completed);
    }
    else if(filter==='Completed'){
        filteredList = todoList.filter(item=>item.completed);
    }
    return (
        <div style={{display:todoList.length?'':'none'}} className="todo-wrapper">
            <div className='todo-container' style={{background:currentTheme.todoListBg}}>
                {filteredList.map(elem=>{
                    return <Todo key={elem.key} item = {elem} removeTodo={removeTodo}  handleTodoToggle={handleTodoToggle} width = {width}/>
                })}
                <DisplayOptions width={width} handleClearCompleted={handleClearCompleted} itemsLeft={itemsLeft} activeFilter={filter} setFilter={setFilter}/>
            </div>
            {width<=450 && 
                <div className='options-wrapper'>
                    <Options activeFilter={filter} setFilter={setFilter}/>
                </div>
            }
        </div>
    );
}
export default DisplayTodo;