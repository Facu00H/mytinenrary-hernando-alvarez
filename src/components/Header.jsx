import React from 'react';
import '../styles/Header.css'
import Burguer from './header-components/Burguer'
import {Link as LinkRouter} from 'react-router-dom'
import { useState } from 'react';




const Header = () => {

  let [clicked, setClicked] = useState(false);

  function handleClick(){
    if(clicked || !clicked){
      setClicked(!clicked);
    }
  } 

  const navItems = [
    {name: "Home", URL:"/"},
    {name: "Cities", URL:"/cities"},
    {name: "New Cities", URL:"/newcity"}
  ]

  const generateBtn = (item) => (
    <LinkRouter to={ item.URL } className='nav-btn'> { item.name } </LinkRouter>
  )

  return (
    <div className="nav">
      <Burguer click={handleClick} />
      
      <div className="logo-container">
        <img className='nav-logo' src="/assets/img/nav_logo.png" alt="Nav logo" />
      </div>
      <div className="user-container">
        <img className="userImg" src='https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg' alt="User Profile"/>  
      </div>
      <div className={clicked === true ? "items-container" : "items-container hidden"}>
        {navItems.map(generateBtn)}
      </div>
    </div>
  );
}

export default Header;
