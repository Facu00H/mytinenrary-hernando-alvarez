import React from 'react'
import '../styles/Footer.css'
import facebook from '../assets/img/facebook_icon.png'
import instagram from '../assets/img/instagram_icon.png'

export default function Footer() {
    return (
        <>
            <footer className='footer-container'>
                <div>
                    <p>&copy; Hernando-Alvarez 2022</p>
                </div>
                <div>
                    <h3>MyTinerary</h3>
                </div>
                <div className='footer-socialNetworks'>
                    <a href="https://www.facebook.com/"><img src={facebook} alt=""/></a>
                    <a href="https://www.instagram.com/"><img src={instagram} alt=""/></a>
                </div>
            </footer>
        </>
    )
}