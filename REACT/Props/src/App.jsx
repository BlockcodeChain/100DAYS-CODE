import React from 'react'
import Profile from './Components/Profile'
import Person from './Components/Person'
const App = () => {
  return (
    <div>
      <Profile name={"ishi"} age={22} hobby={"coding"} />
      <Person productname={"Loreal"} productprize={3000}/>
    </div>
  )
}

export default App
