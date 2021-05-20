import React from 'react';
import '../css/DisplayOptions.css'
import Options from './Options'
import {useTheme} from './ThemeProvider'
const DisplayOptions = (props)=>{
    const {textColor} = useTheme()
    const {handleClearCompleted,itemsLeft,activeFilter,setFilter,width} = props;
    const itemsLeftString = itemsLeft!==1?'items left':'item left'
    return (
        <div className="filters" style={{color:textColor}}>
            <h3 className='items'>{itemsLeft} {itemsLeftString}</h3>

            {width>450 &&
                <Options activeFilter={activeFilter} setFilter={setFilter}/>
            }
            <button style={{color:textColor}}  onClick={handleClearCompleted} className='clear'>Clear Completed</button>
        </div>
    )
}

export default DisplayOptions;