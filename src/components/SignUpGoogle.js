import React, { useEffect, useRef, useState } from 'react'
import { useAddUserSignUpMutation } from '../features/citiesAPI'
import * as jose from 'jose'
export default function SignUpGoogle() {
    const buttonDiv = useRef(null)
    const [signUpUserGoogle] = useAddUserSignUpMutation()
  

    async function handleCredentialResponse(response){
        console.log(response.credential)
   let userObj =   jose.decodeJwt(response.credential)
    console.log(userObj)

    let data={ //completar con datos del response.credential
             name:userObj.name,
             photo:userObj.picture,
             email:userObj.email,
             pass:userObj.sub,
             role: 'user',
             from:'google'
    }
        console.log(buttonDiv.current)
        console.log(data)
        signUpUserGoogle(data)

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
        <div ref={buttonDiv} >

        </div>
    </div>
  )
}
