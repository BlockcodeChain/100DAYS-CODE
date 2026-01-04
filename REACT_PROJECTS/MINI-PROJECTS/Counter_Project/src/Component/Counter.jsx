import React from 'react'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react';
const Counter = () => {
  const [value,setvalue]=useState(0)
  const handleplus=()=>{
  setvalue((prev)=>prev+1)
  }
  const handleminus=()=>{
     setvalue((prev)=>prev-1)
  }
  
  return (
    <div className='mx-auto flex items-center justify-center flex-col  w-full min-h-screen '>
      <h1 className='mb-20 text-7xl font-extrabold text-white ' > COUNTER APP</h1>
       <div className='flex items-center justify-center  border-2 w-[90%] sm:w-105 h-80 border-gray-400 rounded-2xl '>
        <div className='flex flex-col '>
         <h1 className='font-bold text-6xl text-white  mb-15 text-center '>{value}</h1>
         <div className='flex justify-between gap-25  '>
          <button onClick={handleplus} className='w-15 h-15 rounded-full flex items-center justify-center text-white bg-gray-400'><Plus className='size-10 font-extrabold' /></button>
          <button  onClick={handleminus} className='w-15 h-15 rounded-full flex items-center justify-center text-white  bg-gray-400'> <Minus className='size-10  font-extrabold'/></button>
         </div>
       </div>
       </div>
    </div>
  )
}

export default Counter
