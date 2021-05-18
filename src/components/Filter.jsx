import React from 'react';
import '../css/Filter.css'
const Filter = (props)=>{
    const {handleClearCompleted,itemsLeft,activeFilter,setFilter} = props;
    const itemsLeftString = itemsLeft>1?'items left':'item left'
    return (
        <div className="filters">
            <h3 className='items'>{itemsLeft} {itemsLeftString}</h3>
            <div className='options'>
                <button style={{color:activeFilter==='All'?'#00B2FF':''}} onClick={()=>setFilter('All')}>All</button>
                <button style={{color:activeFilter==='Active'?'#00B2FF':''}} onClick={()=>setFilter('Active')}>Active</button>
                <button style={{color:activeFilter==='Completed'?'#00B2FF':''}} onClick={()=>setFilter('Completed')}>Completed</button>
            </div>
            <button onClick={handleClearCompleted} className='clear'>Clear Completed</button>
        </div>
    )
}

export default Filter;