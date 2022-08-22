import React from 'react';
import '../styles/Hero.css'

const Hero = () => {
  return (
    <header className="header" Style="">
      <h1 className="header-title">MyTinerary</h1>
      <p className="header-p">Find your perfect trip, designed by insiders who know and love their cities!</p>
      <a href="./pages/Cities.jsx" className="header-btn">ENTER</a>
    </header>
  );
}

export default Hero;
