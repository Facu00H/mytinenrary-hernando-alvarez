import { useState, useEffect } from 'react'
import '../styles/Header.css'
import { Link as LinkRouter } from 'react-router-dom'
import { useAddUserSignOutMutation } from '../features/citiesAPI'
import * as jose from 'jose'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteCredentials } from '../features/authSlice'
import { useNavigate } from "react-router-dom";






export default function Login() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const role = useSelector(state => state.auth.role)
    const [signOutUser] = useAddUserSignOutMutation()
    const navigate = useNavigate();


    async function logOut() {
        try {
            await signOutUser()
            localStorage.removeItem('token')
            dispatch(deleteCredentials())
            navigate("/",{replace:true})
        } catch(error) {
            console.log(error)
        }
    }    

    

    return (
        <div className="Login">
            <img className='userImg' alt='user-img' src={user === null ? 'https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg' : user.photo}></img>
            <div className='desplegable'> 
                { role === null ?  
                <div className='login-container'>
                    <LinkRouter to={"/auth/signin"} className='loginLink'>Sign In</LinkRouter>
                    <LinkRouter to={'/auth/signup'} className='loginLink'>Sign Up</LinkRouter>
                </div> 
                    : 
                <div className='login-container'>
                    <LinkRouter to={"/Profile"} className='loginLink'>{user.name}</LinkRouter>
                    {role === 'admin' ? <LinkRouter to={'/createAdmin'} className='loginLink'>Create admin</LinkRouter> : <></>}
                    <LinkRouter to={"/cities"} className='loginLink' onClick={ logOut }>Log out</LinkRouter>
                </div>    
                }
            </div>
        </div>
    )
}