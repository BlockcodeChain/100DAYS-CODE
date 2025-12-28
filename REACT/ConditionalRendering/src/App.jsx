import React from 'react'
import Weather from './Component/Weather'
import UserStatus from './Component/UserStatus'
const App = () => {
  const ValidPassword =()=>{
    <h1>Valid Password</h1>
  }
   const InvalidPassword =()=>{
    <h1>InValid Password</h1>
  }
  const password=({isvalid})=>{
    // if(isvalid) return < validPassword/>
    // return <InvalidPassword/>

    // ternary operator
    isvalid ? <ValidPassword/>:<InvalidPassword/>;
  }
  return (
    <div>
     <password isvalid={true}/>
    < Weather/>
    <UserStatus loggedIn={true} isAdmin={true}/>
    </div>
  )
}

export default App
