// import React from 'react'

// const Greeting = () => {
//   let username=  prompt("Enter your name");


//   return (
//     <div>
//       <h1>hello {username}</h1>
//       <p>{new Date()}</p>
//     </div>
//   )
// }

// export default Greeting

// problem in above code ---> it re-renders again and again everytime
// In React, a component re-renders many times

// Every time it re-renders → prompt() runs again

// So it keeps asking your name

// 👉 React components should NOT contain prompt() directly


// import React, { useState, useEffect } from 'react'

// const Greeting = () => {
//   const [username, setUsername] = useState(null)

//   useEffect(() => {
//     const name = prompt("Enter your name")
//     setUsername(name)
//   }, [username]) // runs ONLY once

//   return (
//     <div>
//       <h1>Hello {username}</h1>
//       <p>{new Date().toLocaleString()}</p>
//     </div>
//   )
// }

// export default Greeting



// .....................................
// isme bhi problem hai hum woh aage seekhege kya problem hai isme

import React from 'react'

const Greeting = () => {
    let username="ishi"
  return (
    <div>
        <h1>{username}</h1>
        <p>Date {new Date().toLocaleString()}</p>
      
    </div>
  )
}

export default Greeting
