import {useAddUserSignUpMutation} from '../features/citiesAPI'
import Swal from 'sweetalert2'
import '../styles/Sign.css'
import React, { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function CreateAdmin() {

  const navigate = useNavigate()
  const [name,setName]=useState()
  const [lastName, setLastName]= useState()
  const [email,setMail]=useState()
  const [password,setPassword]=useState()
  const [photo,setPhoto]=useState()
  const [user,setUser]=useState()

////////////////////////////////////////////Functions that execute with the changes in the respect inputs/////////////////////////////////

  const handleName = function(e){
      setName(e.target.value)

  }
  const handleLastName = function(e){
      setLastName(e.target.value)

  }
  const handleEmail = function(e){
      setMail(e.target.value)
      
  }
  const handlePassword = function(e){
      setPassword(e.target.value)
      
  }
  const handlePhoto = function(e){
      setPhoto(e.target.value)
      
  }

  ////////////////////////////////////////////////// object that will be filled for send in post/////////////////////////////////////

  useEffect(()=>{
      let obj ={
          name: name,
          lastName: lastName,
          mail: email,
          password:password,
          photo: photo,
          role: 'admin',
          from:'form',
      }

      setUser(obj)
    
      },[name,email,lastName,password,photo])

  ////////////////////////////////////////////////////reducer that will be called when the user doit submit////////////////////////////////

  const [signUpUser] = useAddUserSignUpMutation()

  const handleSubmit = function(e){
      e.preventDefault()

      if(user.name.length < 2 ){
          Swal.fire({
              title:'Name Failed',
              text:'please verify that the name has more than 2 letters and does not include numbers'
          })

      }else if(user.lastName.length < 2 ){
          Swal.fire({
              title:'Last Name Failed',
              text:'please verify that the last name has more than 2 letters and does not include numbers'
          })
      }else if(user.mail.includes('@')===false){
          Swal.fire({
              title:'Email Failed',
              text:'please verify that the email includes @ sign'
          })

      }else if(user.password.length < 4){
          Swal.fire({
              title:'Password Failed',
              text:'please verify the password , need have more of 4 characters'
          })

      }else if(user.photo.length < 4){
          Swal.fire({
              title:'Photo Empty',
              text:'please verify that the photo exist'
          })

      }else{
        signUpUser(user)
        .unwrap()
        .then(() => {})
        .then((error) => {
        console.log(error)
          })

      Swal.fire(
        {
          icon:'success',
          title:'Admin user created',
          text:'Check admin user email to verify account',
          confirmButtonText:'Do It'
        })
        // navigate('/cities')
      }
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
          <input type='text' onChange={handleEmail}></input>
          <p className='select-Sign'>Password</p>
          <input type='password' onChange={handlePassword}></input>
          <div  className='submit-Sign'>
            <button className='button-Sign'>Create admin user</button>
          </div>
        </div>
      </form>
    </div>
  )
}

