import React, {useState} from 'react';
import '../css/DisplayTodo.css'
import Todo from './Todo'
import Filter from './Filter'
const DisplayTodo = (props)=>{
    const {handleClearCompleted,list:todoList,handleTodoToggle,removeTodo} = props;
    const [filter,setFilter] = useState('All');
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
            <div className='todo-container'>
                {filteredList.map(elem=>{
                    return <Todo key={elem.key} item = {elem} removeTodo={removeTodo}  handleTodoToggle={handleTodoToggle}/>
                })}
                <Filter handleClearCompleted={handleClearCompleted} itemsLeft={itemsLeft} activeFilter={filter} setFilter={setFilter}/>
            </div>
        </div>
    );
}
export default DisplayTodo;