import React from 'react'

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
    </div>
  )
}

export default App
