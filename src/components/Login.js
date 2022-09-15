import { useState, useEffect } from 'react'
import '../styles/Header.css'
import { Link as LinkRouter } from 'react-router-dom'
import { useAddUserSignOutMutation } from '../features/citiesAPI'


const userSession = JSON.parse(localStorage.getItem('user'))


export default function Login() {

    const [signOutUser] = useAddUserSignOutMutation()
    const [role, setRole] = useState(userSession)

    useEffect(() => {
        setRole(userSession)
    }, [userSession])

    function logOut() {
        localStorage.removeItem('user')
        localStorage.setItem('user',  JSON.stringify({
            name: 'guest',
            lastName:'-',
            photo:'https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg',
            mail: '-',
            role: 'guest'
        }));
        window.location.reload()
        signOutUser({mail: role.mail})
    }    

    return (
        <div className="Login">
            <img className='userImg' alt='user-img' src={role.photo}></img>
            <div className='desplegable'> 
                { role.role === 'guest' ?  
                <div className='login-container'>
                    <LinkRouter to={"/auth/signin"} className='loginLink'>Sign In</LinkRouter>
                    <LinkRouter to={'/auth/signup'} className='loginLink'>Sign Up</LinkRouter>
                </div> 
                    : 
                <div className='login-container'>
                    <LinkRouter to={"/auth/signin"} className='loginLink'>{role.name}</LinkRouter>
                    <div className='loginLink' onClick={ logOut }>Log out</div>
                </div>    
                }
                
            </div>
        </div>
    )
}