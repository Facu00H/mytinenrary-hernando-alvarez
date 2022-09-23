import React, { useEffect, useRef } from 'react'
import { useAddUserSignInMutation } from '../features/citiesAPI'
import * as jose from 'jose'
import { useNavigate } from "react-router-dom";

export default function SignInGoogle() {
  const buttonDiv = useRef(null)
  const [signInUserGoogle] = useAddUserSignInMutation()
  const navigate = useNavigate();


  async function handleCredentialResponse(response) {
    let userObj = jose.decodeJwt(response.credential)

    let data = { //completar con datos del response.credential
      name: userObj.given_name,
      lastName: userObj.family_name,
      photo: userObj.picture,
      mail: userObj.email,
      password: userObj.sub,
      role: 'user',
      from: 'google'
    }
    try {
      let res = await signInUserGoogle(data)
      console.log(res);
      localStorage.setItem('token', res.data.response.token)
    } catch (error) {
      console.log(error)
    }
    navigate('/cities')
  } 


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
