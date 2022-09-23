import React from 'react';
import '../styles/Hero.css'
import {Link as LinkRouter} from 'react-router-dom'



if(!localStorage.getItem('user')){
  localStorage.setItem('user',  JSON.stringify({
    name: 'guest',
    lastName:'-',
    photo:'https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg',
    mail: '-',
    role: 'guest'
  }));
}

localStorage.setItem('user',  JSON.stringify({
  name: 'guest',
  lastName:'-',
  photo:'https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg',
  mail: '-',
  role: 'guest'
}))




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
