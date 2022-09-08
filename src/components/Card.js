import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/Card.css'
import { Link as LinkRouter } from 'react-router-dom'


const Card = () => {

  
  const [filter, setFilter] = useState('');

  const handleInput = (e) => {
    setFilter(e.target.value)
  }

  const [cities, setCities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/cities/')
      .then(res => setCities(res.data.response))
      .catch(err => console.error(err))
  }, [])

  let results = [];
  if(results.length === 0){
    results = cities;
  }
  
  if(results.length !== 0){
    results = results.filter( data => data.city.toLowerCase().startsWith(filter.toLocaleLowerCase()))
  }
  
  const card = item => {

    return (
      <div className="card" id="asd">
        <div className="container-img">
          <img className="card-img" src={item.photo} alt="" />
        </div>
        <div className="card-content">
          <h3>{item.city}</h3>
          <div className="btns-container">
            <LinkRouter className='btn-card' to={'/details?' + item._id}>Details</LinkRouter>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
    <div className='input-container'>
      <p className='filter-title'>Buscar ciudad:</p>
      <div className='filter-container'>
        <input className='filter-text' onInput={handleInput} placeholder='Search city...'></input>
      </div>
    </div>
    <div className="container">
      {results?.map(card)}
    </div>
    </>
  );
}
export default Card;