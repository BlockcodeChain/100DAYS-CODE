import React from 'react'

const Profile = ({name,age,hobby}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h1>{hobby}</h1>
    </div>
  )
}

export default Profile
