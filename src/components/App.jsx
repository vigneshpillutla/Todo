import React, { useEffect, useState } from 'react';
import Header from './Header'
import DisplayTodo from './DisplayTodo'; 
import {useTheme} from './ThemeProvider';
function App() {
  const [todoList,setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')));
  const currentTheme = useTheme();
  useEffect(()=>{
    localStorage.setItem('todoList',JSON.stringify(todoList));
  },[todoList])
  useEffect(()=>{
    const bgColor = localStorage.getItem('dark')==='false'?'#FFFFFF':'#222831'
    console.log(bgColor);
    document.body.style = `background:${bgColor}`;
  },[])
  const handleTodoToggle = (elem)=>{
    const key = elem.key;
    let pos = (todoList.map(item=>item.key)).indexOf(key);
    let updatedTodos = [...todoList];
    let status = updatedTodos[pos].completed;
    let changedTodo = updatedTodos[pos];
    updatedTodos.splice(pos,1);
    changedTodo.completed = !status;
    if(status){
      updatedTodos.push(changedTodo);
    }
    else{
      updatedTodos.unshift(changedTodo);
    }
    setTodoList(updatedTodos);
  }
  const removeTodo = (item)=>{
    const key = item.key;
    const updatedTodos = todoList.filter(elem=>elem.key!==key);
    setTodoList(updatedTodos);
  }
  const handleClearCompleted = ()=>{
    let updatedTodos = todoList.filter(item=>!item.completed);
    setTodoList(updatedTodos)  
  }
  return (
      <div className="App">
        <Header onClick={setTodoList}/>
        <DisplayTodo handleClearCompleted={handleClearCompleted} list = {todoList} handleTodoToggle={handleTodoToggle} removeTodo={removeTodo}/>
      </div>
  );
}

export default App;
