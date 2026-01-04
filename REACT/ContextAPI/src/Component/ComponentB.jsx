import React from 'react'
import ComponentC from './ComponentC'
const ComponentB = ({name}) => {
  return (
    <div>
        <h2>ComponetB</h2>
        <ComponentC name={name}/>
    </div>
  )
}

export default ComponentB
