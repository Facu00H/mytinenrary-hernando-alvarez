import React from 'react';
import { useState, useEffect} from 'react'
import axios from 'axios'

const NewCityForm = () => {

  const [message, setMessage] = useState('')
  
  const [formValues, setFormValues] = useState({
    city: '',
    country: '',
    photo: '',
    population: '',
    fundation: '',
  }) 

  const handelSubmit = (e) => {
    e.preventDefault()
    if(formValues.city.length > 3 && formValues.country !== "" && formValues.photo.length > 5 && formValues.population !== 0 && formValues.fundation !== 0) {
    axios.post('http://localhost:4000/cities/', formValues)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
      setMessage('form send succesfully')
      setFormValues({
        city: '',
        country: '',
        photo: '',
        population: '',
        fundation: '',
      })
    }else{
      setMessage('all fields must be filled')
    }
  }
  

  const errMessage = (message) => {
    return (
    <p> {message} </p>
    )
  }


  function changeValue( e ){
    const {name, value} = e.target;
    setFormValues( {...formValues, [name]: value} )
  }

  

 



  return (
    <form method="post" className="main-content">
      <div className='form-container'>
        <div className='select'>
          <p className='select-title'>Select Country:</p>
          <select onChange={changeValue} name='country' className='input-city'>
            <option value="Argentina">Argentina</option>
            <option value="belgium">Belgium</option>
            <option selected value="italy">Italy</option>
            <option value="france">France</option>
          </select>
        </div>
        <div className='city-form'>
          <p className='select-city'>City you want to add:</p>
          <input type='text' onChange={changeValue} name='city' value={formValues.city} className='input-city' placeholder='Lime'></input>
        </div>
        <div className='description'>
          <p className='select-city'>Photo URL:</p>
          <input type='text' onChange={changeValue} name='photo' value={formValues.photo} className='input-city' placeholder='htts//:example...'></input>
        </div>
        <div className='description'>
          <p className='select-city'>Population:</p>
          <input type='number' onChange={changeValue} name='population' value={formValues.population} className='input-city' placeholder='1234'></input>
        </div>
        <div className='description'>
          <p className='select-city'>Fundation</p>
          <input type='number' onChange={changeValue} name='fundation' value={formValues.fundation} className='input-city' placeholder='1234'></input>
        </div>
        <div className='submit-container'>
          <button onClick={handelSubmit} type='submit' className='submit-city'>Submit</button>
        </div>
        <div>
        {errMessage(message)}
        </div>
      </div>
    </form>
  );
}

export default NewCityForm;
