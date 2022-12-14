import React, { useEffect,useState } from 'react'
import {useAddUserSignInMutation} from '../features/citiesAPI'
import SignInGoogle from './SignInGoogle'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/authSlice'
import { useNavigate } from "react-router-dom";

export default function SignIn() {

const navigate = useNavigate()
const dispatch = useDispatch()
const [mail,setEmail]=useState()
const [password,setPassword]=useState()
const [user,setUser]=useState()



const handleEmail = function(e){
    setEmail(e.target.value)
    
}
const handlePassword = function(e){
    setPassword(e.target.value)
    
}


useEffect(()=>{
    let obj ={
        mail:mail,
        password:password,
        form:'form',
        role:'user'
    }

    setUser(obj)

    },[mail,password])

const [signInUser] = useAddUserSignInMutation()

async function handleSubmit (e) {
    e.preventDefault()
    if(user.mail.includes('@')===false){
        Swal.fire({
            title:'Error email',
            text:'need include the @ sign',
            confirmButtonText:'Write Again'
        })
    }else if(user.password.length < 4 ){
        Swal.fire({
            title:'Error Password',
            text:'need be more of 4 characters',
            confirmButtonText:'Write Again'

        })

    }else{

    try {
        let res = await signInUser(user)
        dispatch(setCredentials(res.data.response.user))
        localStorage.setItem('token',res.data.response.token)
        navigate('/cities') 
    }catch(err){
        console.error(err)
    }


       Swal.fire({
        icon:'success',
        title:'Sign In successfully',
        text : 'please look and read or create yours itineraries',
        confirmButtonText:'Do It'
       })
    }
}




  return (
    <div className='Sign-container'>
        <h1 className='hSign'>Please Sign In</h1>
      <form onSubmit={handleSubmit} className="main-Sign">
    <div className='form-SignIn'>
        <div className='inputs-p'>

    <p className='select-Sign'>Email</p>
    <input type='text' onChange={handleEmail}></input>
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
