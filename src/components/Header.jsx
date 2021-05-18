import React from 'react';
import '../css/Header.css';
import NewTodo from './NewTodo'
const Header = (props)=>{
    return (
        <div className="app-banner">
            <div className="content-frame">
                <div className='content-wrapper'>
                    <h1>TODO</h1>
                    <NewTodo onClick = {props.onClick}/>
                </div>
            </div>
        </div>
    )
}
export default Header;