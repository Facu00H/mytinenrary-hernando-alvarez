import React from 'react';
import '../styles/Header.css'
import Burguer from './header-components/Burguer'
import {Link as LinkRouter} from 'react-router-dom'
import { useState, useEffect} from 'react';
import Login from './Login';
import * as jose from 'jose'
import { useSelector } from 'react-redux'



const Header = () => {

  const user = useSelector(state => state.auth.user)
  const role = useSelector(state => state.auth.role)
  const logged = useSelector(state => state.auth.logged)
  const [data, setData] = useState({role: 'guest'})

  useEffect(() => {
    if(localStorage.getItem('token')){
      const userData = jose.decodeJwt(localStorage.getItem('token'))
      setData(userData)
    }
  },[])
  
  let [clicked, setClicked] = useState(false);

  function handleClick(){
    if(clicked || !clicked){
      setClicked(!clicked);
    }
  } 

  const navItems = [
    {name: "Home", URL:"/"},
    {name: "Cities", URL:"/cities"},
  ]

  data.role !== "guest" && navItems.push({name: "New City", URL:"/newcity"},{name: "Itineraries", URL:"/itineraries/user"}, {name: "Edit city", URL:"/editcity"})


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
       <Login/>
      </div>
      <div className={clicked === true ? "items-container" : "items-container hidden"}>
        {navItems.map(generateBtn)}
      </div>
    </div>
  );
}

export default Header;
