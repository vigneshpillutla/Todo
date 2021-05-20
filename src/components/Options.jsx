import React from 'react';
import '../css/Options.css'
import {useTheme} from './ThemeProvider'

const Options = (props)=>{
    const {activeFilter,setFilter} = props;
    const {textColor,activeColor} = useTheme()

    return(
    <div className='options'>
                <button style={{color:activeFilter==='All'?activeColor:textColor}} onClick={()=>setFilter('All')}>All</button>
                <button style={{color:activeFilter==='Active'?activeColor:textColor}} onClick={()=>setFilter('Active')}>Active</button>
                <button style={{color:activeFilter==='Completed'?activeColor:textColor}} onClick={()=>setFilter('Completed')}>Completed</button>
    </div>
    )
}
export default Options;