import React from 'react'

const JSXRule = () => {
    let name="ishi"
    let favnum=7
    const specialClass="simple class"
  return (
    <div>
      <h1>JSX RULES</h1>
      <p>Single parent element</p>
      <p>Properly used</p>
      <p>className</p>
      {2+3}
      {name}
      {favnum}
      <p className='{specialClass}'>this is special class</p>
    </div>
  )
}

export default JSXRule
