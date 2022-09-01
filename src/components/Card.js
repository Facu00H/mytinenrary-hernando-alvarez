import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/Card.css'

const Card = () => {

  const [cities, setCities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/cities/')
      .then(res => setCities(res.data.response))
      .catch(err => console.error(err))
  }, [])

  const card = item => {

    return (
      <div className="card" id="asd">
        <div className="container-img">
          <img className="card-img" src={item.photo} alt="" />
        </div>
        <div className="card-content">
          <h3>{item.city}</h3>
          <div className="btns-container">
            <div className="btn-card" id={item.id}>Why Visit it?</div>
            <div className="btn-card" id={item.id}>Contact us!</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      {cities.map(card)}
    </div>
  );
}
export default Card;