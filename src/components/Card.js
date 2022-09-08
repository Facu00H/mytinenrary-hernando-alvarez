import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/Card.css'
import { Link as LinkRouter } from 'react-router-dom'
import {useGetAllCitiesQuery} from '../features/citiesAPI'


const Card = () => {
  
  const [filterText, setFilterText] = useState('');
  const {
    data: cities, 
    error,
    isLoading,
    isSuccess,
    isFailed,
  } = useGetAllCitiesQuery()
  
  let filter = []
  if(isLoading){
    filter = []
  }else if(isSuccess){
    filter = cities.response
  }else if(isFailed){
    filter = []
    console.log(error)
  }
  
  const handleInput = (e) => {
    setFilterText(e.target.value)
  }
    
    if(filter.length !== 0){
      filter = filter.filter( data => data.city.toLowerCase().startsWith(filterText.toLocaleLowerCase()))
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
      {filter.map(card)}
    </div>
    </>
  );
}
export default Card;