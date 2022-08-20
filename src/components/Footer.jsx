import React from 'react'
import '../styles/Footer.css'

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
                    <a href="https://www.facebook.com/"><img src="/assets/img/facebook_icon.png" alt=""/></a>
                    <a href="https://www.instagram.com/"><img src="/assets/img/instagram_icon.png" alt=""/></a>
                </div>
            </footer>
        </>
    )
}