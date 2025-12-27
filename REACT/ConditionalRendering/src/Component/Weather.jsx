import React from 'react'

const Weather = () => {
    const temp=15;
    if(temp<15) return <h1>It's cold outside</h1>
    else if(temp>25) return <h1>It's hot outside</h1>
     else if(temp>=15 &&temp<=25) return <h1>It's nice outside</h1>
  return (
    <div>
      
    </div>
  )
}

export default Weather
