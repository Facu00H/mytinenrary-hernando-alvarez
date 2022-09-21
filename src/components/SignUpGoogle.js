import React, { useEffect, useRef } from 'react'
import { useAddUserSignUpMutation } from '../features/citiesAPI'
import * as jose from 'jose'
import { useAddUserSignInMutation } from '../features/citiesAPI'
import { useNavigate } from "react-router-dom";



export default function SignUpGoogle() {
    const buttonDiv = useRef(null)
    const [signUpUserGoogle] = useAddUserSignUpMutation()
    const [signInUserGoogle] = useAddUserSignInMutation()
    const navigate = useNavigate();
  

    async function handleCredentialResponse(response){
        console.log(response.credential)
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
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(data));
    
    navigate('/cities')

    signUpUserGoogle(data)
    signInUserGoogle(data)
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

    // const cat = localStorage.getItem('user')
    // console.log(JSON.parse(cat))


  return (
    <div>
        <div ref={buttonDiv} >

        </div>
    </div>
  )
}
