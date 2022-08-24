import React from 'react'
import {Link as LinkRouter} from 'react-router-dom'
import { useState } from 'react';

export default function Burguer() {

  let [getNavState, setNavState] = useState(false);
  let [getBtnState, setBtnState] = useState("items-container hidden");

  function changeState(){
    if (getNavState === false) {
      setNavState(true)
      setBtnState("items-container")
    }else{
      setNavState(false)
      setBtnState("items-container hidden")
    }
    console.log(getNavState)
  }


  const navItems = [
    {name: "Cities", URL:"/cities"},
    {name: "New Cities", URL:"/newcity"}
  ]

  

  

  const generateBtn = (item) => (
    <LinkRouter to={ item.URL } className='nav-btn'> { item.name } </LinkRouter>
  )

  return (
      <div className='navegation'>
        <div className="burguer" onClick={changeState}>
          <img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt="Menu button" className="imgBurguer"/>
        </div>
        <div className={getBtnState}>
          {navItems.map(generateBtn)}
        </div>
      </div>
  )};
