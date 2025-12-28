import React from 'react'
import { useState } from 'react';
const TodoList = () => {
    const [list,setlist]=useState("");
    const items=localStorage.getItem(JSON.stringify())
    const inputvalue=(e)=>{
        setlist(e.targetvalue)
    }
  return (
    <div>
        <form >
           
            <input type="text" placeholder="Enter Items" onChnage={inputvalue} value={list}/>
            <button>Add item</button>
            <br />
             <label >ITEMS:-{list}</label>
        </form>
      
    </div>
  )
}

export default TodoList
