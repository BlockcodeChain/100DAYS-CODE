import React from 'react'

const Person = ({productname,productprize}) => {
  return (
    <div>
      <h2>{productname}</h2>
      <p>{productprize}</p>
    </div>
  )
}

export default Person
