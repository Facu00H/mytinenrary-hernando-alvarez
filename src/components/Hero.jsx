import React from 'react';
import '../styles/Hero.css'
import {Link as LinkRouter} from 'react-router-dom'


const Hero = () => {
  return (
    <header className="header" Style="">
      <img className='logo' src="/assets/img/logo.png" alt="MyTinerary logo" />
      <h1 className='hero-title'>MyTinerary</h1>
      <LinkRouter to="/cities" className="header-btn">ENTER</LinkRouter>
    </header>
  );
}

export default Hero;
