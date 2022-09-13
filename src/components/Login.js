import { useState } from 'react'
import '../styles/Header.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function Login() {

    return (
        <div className="Login">
            <img className='userImg' alt='user-img' src='https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg'></img>
            <div className='desplegable'> 
                <div className='login-container'>
                    <LinkRouter to={"/auth/signin"} className='loginLink'>Sign In</LinkRouter>
                    <LinkRouter to={'/auth/signup'} className='loginLink'>Sign Up</LinkRouter>
                </div>
            </div>
        </div>
    )
}