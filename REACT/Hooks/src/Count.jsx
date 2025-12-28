import React from 'react'
import { useState } from 'react';
const Count = () => {
      const [value ,setvalue] =useState(0);
      const Increment=()=>{
        setvalue((prev)=>prev+1)
      }
      const Decrement=()=>{
        setvalue((prev)=>prev-1)
      }
  return (
    <div>
       <button onClick={Increment}>Increment</button>
      {value}
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Count
