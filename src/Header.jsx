import React from 'react';
import './Header.css';
import NewTodo from './NewTodo'
const Header = ()=>{
    return (
        <div className="app-banner">
            <div className="content-frame">
                <div className='content-wrapper'>
                    <h1>TODO</h1>
                    <NewTodo/>
                </div>
            </div>
        </div>
    )
}
export default Header;