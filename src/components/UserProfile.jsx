import React from 'react'
import '../styles/userProfile.css'
import { useSelector } from 'react-redux'

export default function UserProfile() {

  
  const user = useSelector(state => state.auth.user)

  return (
    <div className="container">
      <div className="card-profile">
      <div className="imgProfile-container">
        <img className="imgProfile" src={user.photo} alt={user.photo}/>
      </div>
      <div className="profile-data">
        <h3>{user.name}</h3>
        <p>{user.mail}</p>
      </div>
      </div>
    </div>
  )
}
