import React from 'react';
import '../css/Header.css';
import NewTodo from './NewTodo'
import ToggleTheme from './ToggleTheme'
import {useTheme} from './ThemeProvider'
const Header = (props)=>{
    const currentTheme = useTheme();
    return (
        <div className="app-banner" style={{backgroundImage:currentTheme.headerBackground}}>
            <div className="content-frame">
                <div className='content-wrapper'>
                    <div className='toggle-wrapper'>
                        <h1>TODO</h1>
                        <ToggleTheme/>
                    </div>
                    <NewTodo onClick = {props.onClick}/>
                </div>
            </div>
        </div>
    )
}
export default Header;