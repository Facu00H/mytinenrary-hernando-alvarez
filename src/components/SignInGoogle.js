import React, { useEffect, useRef, useState } from 'react'
import { useAddUserSignInMutation } from '../features/citiesAPI'
import * as jose from 'jose'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function SignInGoogle() {
    const buttonDiv = useRef(null)
    const [signInUserGoogle] = useAddUserSignInMutation()
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    
    async function handleCredentialResponse(response){
   let userObj =   jose.decodeJwt(response.credential)
   console.log(userObj)

   let data={ //completar con datos del response.credential
      name:userObj.given_name,
      lastName:userObj.family_name,
      photo:userObj.picture,
      mail:userObj.email,
      password:userObj.sub,
      role: 'user',
      from:'google'
    }
    setUser(data)

    localStorage.removeItem('user');
    const dataStorage = JSON.parse(localStorage.getItem('user'))

    localStorage.setItem('user', JSON.stringify(data));
    navigate('/cities')
    window.location.reload()
        


        signInUserGoogle(data)
    }

    // useEffect(() => {
    //   axios.patch('http://localhost:4000/auth/signin', user)
    //   .then((response) => console.log(response))
    //   .catch(err => console.log(err))
    // }, [user])
    


    useEffect(()=> {
        /*global google*/
        google.accounts.id.initialize({
            client_id: '213559183188-7610fq0cobgivqp60j5s6fb9je81jr2r.apps.googleusercontent.com',
            callback: handleCredentialResponse
          });
          google.accounts.id.renderButton(
           buttonDiv.current,
            { theme: "outline", size: "large" }  // customization attributes
          );

        

    },[])
  return (
    <div>
        <div ref={buttonDiv}>

        </div>
    </div>
  )
}
