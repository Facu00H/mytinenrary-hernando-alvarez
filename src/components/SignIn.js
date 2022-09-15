import React, { useEffect,useState } from 'react'
import {useAddUserSignInMutation} from '../features/citiesAPI'
import SignInGoogle from './SignInGoogle'
export default function SignIn() {

let [email,setEmail]=useState()
let [password,setPassword]=useState()
let [user,setUser]=useState()



const handleEmail = function(e){
    setEmail(e.target.value)
    
}
const handlePassword = function(e){
    setPassword(e.target.value)
    
}


useEffect(()=>{
    let obj ={
        mail: email,
        password:password,
        form:'form',
        role:'user'
    }

    setUser(obj)

    },[email,password])

const [signInUser] = useAddUserSignInMutation()

const handleSubmit = function(e){
    e.preventDefault()

    signInUser(user)

}




  return (
    <div className='Sign-container'>
        <h1 className='hSign'>Please Sign In</h1>
      <form onSubmit={handleSubmit} className="main-Sign">
    <div className='form-Sign'>
        <div className='inputs-p'>

    <p className='select-Sign'>Email</p>
    <input type='email' onChange={handleEmail}></input>
    <p className='select-Sign'>Password</p>
    <input type='password' onChange={handlePassword}></input>
        </div>
        <div  className='submit-Sign'>
        <button className='button-Sign'>Sign Up</button>
        <SignInGoogle/>
        </div>
    </div>
   </form>
    </div>
  )
}
