import React from 'react';
import '../styles/Header.css'
import Burguer from './header-components/Burguer'


const Header = () => {

  return (
    <div className="nav">
      <Burguer/>
      <h1>MyTinerary</h1>
      <div className="userImg">
        <img className="userImg" src='https://icon-library.com/images/generic-user-icon/generic-user-icon-19.jpg' alt="User Profile"/>  
      </div>
    </div>
  );
}

export default Header;
