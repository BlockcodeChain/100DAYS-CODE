// to solve prop drilling problem we use context api 
import React from 'react'
import { createContext } from 'react'
export const Data=createContext();
import ComponentA from './ComponentA';
const ContextAP1 = () => {
  const name='samriddhi'
  return (
    <div>
      <Data.Provider value={name}>
     <ComponentA/>
      </Data.Provider>
    </div>
  )
}

export default ContextAP1
