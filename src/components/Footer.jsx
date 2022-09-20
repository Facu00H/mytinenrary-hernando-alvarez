import React from 'react'
import '../styles/Footer.css'
import { Link as LinkRouter} from 'react-router-dom'



export default function Footer() {

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    const pages = [
        {name: 'Home', URL: '/'},
        {name: 'Cities', URL: '/cities'},
        {name: 'New City', URL: '/newcity'},
    ]

    const link = (pages) => <LinkRouter to={pages.URL} className='navigation-links'>{pages.name}</LinkRouter>

    return (
        <>
            <footer className='footer-container'>
                <div className="footer-container-child">
                    <div className='footer-info-social'>
                        <div>
                            <p>Get connected with us on social networks:</p>
                        </div>
                        <div className='footer-socialNetworks'>
                            <a href="https://www.facebook.com/"><img src="/assets/img/facebook_icon.png" alt="Facebook"/></a>
                            <a href="https://twitter.com/"><img src="/assets/img/twitter_icon.png" alt="Twitter" /></a>
                            <a href="https://google.com/"><img src="/assets/img/google_icon.png" alt="Google" /></a>
                            <a href="https://www.instagram.com/"><img src="/assets/img/instagram_icon.png" alt="Instagram"/></a>
                            <a href="https://linkedin.com/"><img src="/assets/img/linkedin_icon.png" alt="Linked In" /></a>
                            <a href="https://github.com/"><img src="/assets/img/github_icon.png" alt="Github" /></a>
                        </div>
                    </div>
                    <div className="footer-title-menuNavigator-contact">
                        <div className="footer-page-logo">
                            <img className='footer-logo' src="/assets/img/logo.png" alt="" />
                        </div>
                        <div className='footer-menu-navigator'>
                            <h4>Navigation</h4>
                                {pages.map(link)}
                        </div>
                        <div className="footer-contact">
                            <h4>Contact</h4>
                            <p>New York, NY 10012, US</p>
                            <p><a href="mailto:info@gmail.com">info@gmail.com</a></p>
                            <p><a href="tel:+ 01 234 567 88">+ 01 234 567 88</a></p>
                        </div>
                        <div className='footer-scrollUp-container'>
                            <button className='footer-scrollUp-button' onClick={scrollUp}><img src="/assets/img/up-arrow-circle-regular-24.png" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <p>&copy; 2022 Copyright: Hernando-Alvarez</p>
                </div>
            </footer>
        </>
    )
}