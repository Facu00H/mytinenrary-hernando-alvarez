import { useState } from 'react'
import '../styles/Header.css'

export default function Login() {
     const [open, setOpen] = useState(false)

    const handleOpenMenu = () => {
        if(open == true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className="Login">
             <button className='Sesion' onClick={handleOpenMenu} ><img className='userImg' src='https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg'></img></button>
             <div className='Desplegable'> 
                {
                    open
                        ? 
                            <div>
                            <a href="/signin">Sign In</a>
                            <a href="/signup">Sign Up</a>
                            </div>
                        
                        : null
                }
            </div>
        </div>
    )
}