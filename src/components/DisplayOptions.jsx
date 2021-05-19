import React from 'react';
import '../css/DisplayOptions.css'
import Options from './Options'
const DisplayOptions = (props)=>{
    const {handleClearCompleted,itemsLeft,activeFilter,setFilter,width} = props;
    const itemsLeftString = itemsLeft>1?'items left':'item left'
    return (
        <div className="filters">
            <h3 className='items'>{itemsLeft} {itemsLeftString}</h3>

            {width>450 &&
                <Options activeFilter={activeFilter} setFilter={setFilter}/>
            }
            <button onClick={handleClearCompleted} className='clear'>Clear Completed</button>
        </div>
    )
}

export default DisplayOptions;