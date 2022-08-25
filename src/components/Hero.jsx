import React from 'react';
import '../styles/Hero.css'
import CallToAction from './CallToAction';


const Hero = () => {
  return (
    <header className="header" Style="">
      <img className='logo' src="/assets/img/logo.png" alt="MyTinerary logo" />
      <h1 className='hero-title'>MyTinerary</h1>
      <CallToAction />
    </header>
  );
}

export default Hero;
