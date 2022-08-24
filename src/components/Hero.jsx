import React from 'react';
import '../styles/Hero.css'
import {Link as LinkRouter} from 'react-router-dom'


const Hero = () => {
  return (
    <header className="header" Style="">
      <h1 className="header-title">MyTinerary</h1>
      <p className="header-p">Find your perfect trip, designed by insiders who know and love their cities!</p>
      <LinkRouter to="/cities" className="header-btn">ENTER</LinkRouter>
    </header>
  );
}

export default Hero;
