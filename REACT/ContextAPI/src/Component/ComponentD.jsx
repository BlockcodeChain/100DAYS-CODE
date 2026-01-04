import React, { useContext } from 'react'
import {Data} from './ContextAP1'

const ComponentD = () => {
  const name = useContext(Data)

  return <h2>Component D : {name}</h2>
}

export default ComponentD
