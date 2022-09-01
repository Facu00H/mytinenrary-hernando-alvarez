import React from 'react';
import { items } from '../data/ArrayCiudades';
import '../styles/Card.css'

const Card = () => {

  const card = item => { 

    return (
    <div className="card" id="asd">
      <div className="container-img">
        <img className="card-img" src={item.url} alt="" />
      </div>
      <div className="card-content">
        <h3>{item.title}</h3>
        <div className="btns-container">
          <div className="btn-card" id={item.id}>Why Visit it?</div>
          <div className="btn-card" id={item.id}>Contact us!</div>
        </div>
      </div>
    </div>
  )} 

  return (
    <div className="container">
      {items.map(card)}
    </div>
  );
}
export default Card;