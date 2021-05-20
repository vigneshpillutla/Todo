import React from 'react';
import '../css/ToggleTheme.css';
import {useTheme,useThemeUpdate} from './ThemeProvider'
const ToggleTheme = (props)=>{
    const currentTheme = useTheme();
    const toggleTheme = useThemeUpdate()
    return (
        <div style={{background:currentTheme.toggleButtonBg}} onClick={toggleTheme} id="toggle-outer">
            <div style={{left:currentTheme.toggleIconPosition}} id="toggle-inner">
                <img src={currentTheme.toggleIcon} alt="" />
            </div>
        </div>
    )
}
export default ToggleTheme;