import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
useState
const Profile = () => {
    const [name,setName]=useState(()=>{
        const saveName=localStorage.getItem('name')
        return saveName ?JSON.parse(saveName) :""
    });
    useEffect(()=>{
      localStorage.setItem('name',JSON.stringify(name))
    },[name])
     const[age,setAge]=useState(()=>{
        const saveAge=localStorage.getItem('age')
        return saveAge ?JSON.parse(saveAge) :""
    });
       useEffect(()=>{
      localStorage.setItem('age',JSON.stringify(age))
    },[age])
  return (
    <div>
      <h1>USER PROFILE</h1>
      <label >Name</label>
   
      <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
      <br />
        <label >Age</label>
      <input type="text" placeholder='Enter your age'value={age} onChange={(e)=>setAge(e.target.value)} />
      <br /><br />
         <h2>Profile Information</h2>
         <p><strong>Name: </strong>{name}</p>
          <p><strong>Age: </strong>{age}</p>

    </div>
  )
}

export default Profile
