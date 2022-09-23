import React from 'react';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/Card.css'
import { Link as LinkRouter } from 'react-router-dom'
import {useGetAllCitiesQuery} from '../features/citiesAPI'


const Card = () => {
  
  const [order, setOrder] = useState('')
  const [value, setValue] = useState('')
  const [cityOrCountry, setCityOrCountry] = useState('city')
  const [query, setQuery] = useState('');

  useEffect(()=>{
    if(value !== ""){
      setQuery(`?${cityOrCountry}=${value}`)
    }else{
      setQuery(`?${cityOrCountry}=all`)
    }
    if(value !== "" && order !== ''){
      setQuery(`?${cityOrCountry}=${value}&order=${order}`)
    }
    if(value === '' && order !== ''){
      setQuery(`?${cityOrCountry}=all&order=${order}`)
    }
  },[value, order])
  
  // const query = `?${cityOrCountry}=${value}&${order}`
  
  const {
    data: cities, 
    error,
    isLoading,
    isSuccess,
    isFailed,
  } = useGetAllCitiesQuery(query);
  
  let filter = []
  if(isLoading){
    filter = []
  }else if(isSuccess){
    filter = cities.response
    if(filter === []){
      filter = []
    }
  }else if(isFailed){
    filter = undefined
    console.log(error)
  };
  
  const handleInput = (e) => {
    setValue(e.target.value.trim().charAt(0).toUpperCase() + e.target.value.slice(1))
  };

    function alphabetFilter(e){
      setOrder(e.target.value)
    };

    function CityorCountry(e){
      setCityOrCountry(e.target.value)
    };
  
  
  const card = item => {

    return (
      <div className="card" id="asd">
        <div className="container-img">
          <img className="card-img" src={item.photo} alt="" />
        </div>
        <div className="card-content">
          <h3>Country: {item.country}</h3>
          <h3>City: {item.city}</h3>
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
      <div className='filter-container'>
        <div className='filterCheck'>
          <p className='labelInp'>Filter by:</p>
          <label className='labelInp'>
            <input type="radio" name="cityOrCountry" onClick={CityorCountry} value="city"/> City
          </label>
          <label className='labelInp'>
            <input type="radio" name="cityOrCountry" onClick={CityorCountry} value="country"/> Country
          </label>
          <label className='labelInp'>
          <input type="radio" name="Alphabet" onClick={alphabetFilter} value="AZ"/> A-Z
        </label>
        <label className='labelInp'>
          <input type="radio" name="Alphabet" onClick={alphabetFilter} value="ZA"/> Z-A
        </label>
        </div>
        <input className='filter-text' onInput={handleInput} placeholder={cityOrCountry === 'city' ? 'Search City...': 'Search Country...'}></input>

      </div>
    </div>
    <div className="container">
      {filter.length !== 0 ? filter.map(card) : <div>Search not found</div>}
    </div>
    </>
  );
}
export default Card;