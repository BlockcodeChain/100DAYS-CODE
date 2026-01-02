import React from 'react'
import { useState,useEffect } from 'react'

const TodoList = () => {
    const [item, setitem] = useState(()=>{
        const saveditem=localStorage.getItem('item')
        return saveditem ? JSON.parse(saveditem):[]
    })
    const [inputs,setinputs]=useState('')
    
    useEffect(()=>{
     localStorage.setItem('item',JSON.stringify(item))
     

    },[item])
    const handleAdd=()=>{
        if(inputs === "") return;
        setitem([...item,inputs])
        setinputs("")

    }
    const handleRemove= (index)=>{
        setitem(item.filter((_,id)=>id!=index))
    }
  return (
    <div>
      <h1>TODO LIST </h1>
       <input type="text" value={inputs} onChange={(e)=>setinputs(e.target.value)}  />
       <button onClick={handleAdd}>ADD ITEMS</button>
       <ul>
         {
            item.map((itm,id)=>(
                <li key={id}>
                    {itm} <button onClick={() => handleRemove(id)}>❌</button>
                </li>
               
            ))
            
         }
       </ul>
      
    </div>
  )
}

export default TodoList
