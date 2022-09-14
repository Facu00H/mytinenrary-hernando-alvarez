import {useAddUserSignUpMutation} from '../features/citiesAPI'
import '../styles/Sign.css'
import React, { useEffect,useState } from 'react'
import SignUpGoogle from './SignUpGoogle'
export default function SignUp() {

let [name,setName]=useState()
let [lastName, setLastName]= useState()
let [email,setEmail]=useState()
let [password,setPassword]=useState()
let [photo,setPhoto]=useState()
let [user,setUser]=useState()


const handleName = function(e){
    setName(e.target.value)

}
const handleLastName = function(e){
    setLastName(e.target.value)

}
const handleEmail = function(e){
    setEmail(e.target.value)
    
}
const handlePassword = function(e){
    setPassword(e.target.value)
    
}
const handlePhoto = function(e){
    setPhoto(e.target.value)
    
}


useEffect(()=>{
    let obj ={
        name:name,
        lastName:lastName,
        photo:photo,
        mail: email,
        password:password,
        role: 'user',
        from:'form'
    }

    setUser(obj)
   
    },[name,email,lastName,password,photo])


const [signUpUser] = useAddUserSignUpMutation()

const handleSubmit = function(e){
    e.preventDefault()
    signUpUser(user)
    .unwrap()
    .then(() => {})
    .then((error) => {
       console.log(error)
    })
    
}




  return (
    <div className='Sign-container'>
        <h1 className='hSign'>Please Sign Up</h1>
      <form onSubmit={handleSubmit} className="main-Sign">
    <div className='form-Sign'>
    <p className='select-Sign'>Name</p>
    <input type='text' onChange={handleName}></input>
    <p className='select-Sign'>Last name</p>
    <input type='text' onChange={handleLastName}></input>
    <p className='select-Sign'>Photo Link</p>
    <input type='text' onChange={handlePhoto}></input>
    <p className='select-Sign'>Email</p>
    <input type='email' onChange={handleEmail}></input>
    <p className='select-Sign'>Password</p>
    <input type='password' onChange={handlePassword}></input>
        <div  className='submit-Sign'>
        <button className='button-Sign'>Sign Up</button>
        <SignUpGoogle/>
        </div>
    </div>
   </form>
    </div>
  )
}
