import React, { useState } from 'react'

const Counter = () => {
    const[value,UseValue]=useState(0);

    const handleInc=()=>{
        UseValue(value+1);
    }

    const handeleDec=()=>{
        UseValue(value-1);
    }
  return (
    <div className='App'>
       <div>
       <button className='btn btn-primary' onClick={(event)=>handleInc(event)}>Increment</button>
        <div className='Value'> 
        <h1>{value}</h1>
        </div>
        <button className='btn btn-primary' onClick={(event)=>handeleDec(event)}>Decrement</button>
       </div>
    </div>
  )
}

export default Counter;