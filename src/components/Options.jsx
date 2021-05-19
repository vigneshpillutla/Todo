import React from 'react';
import '../css/Options.css'
const Options = (props)=>{
    const {activeFilter,setFilter} = props;
    return(
    <div className='options'>
                <button style={{color:activeFilter==='All'?'#00B2FF':''}} onClick={()=>setFilter('All')}>All</button>
                <button style={{color:activeFilter==='Active'?'#00B2FF':''}} onClick={()=>setFilter('Active')}>Active</button>
                <button style={{color:activeFilter==='Completed'?'#00B2FF':''}} onClick={()=>setFilter('Completed')}>Completed</button>
    </div>
    )
}
export default Options;