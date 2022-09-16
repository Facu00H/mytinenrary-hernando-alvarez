import React from 'react';
import Swal from 'sweetalert2';
import { useState, useEffect} from 'react'
import axios from 'axios'

const NewCityForm = () => {


  
  const [formValues, setFormValues] = useState({
    city: '',
    country: '',
    photo: '',
    population: '',
    fundation: '',
  }) 

  const handelSubmit = (e) => {
    e.preventDefault()

    if(formValues.city.length < 3) {
      Swal.fire({
        title:'Name failed',
        text : 'need include more of three leters'
      })


    }else if(formValues.country === ""){
      Swal.fire({
        title:'Country failed',
        text : 'i think that you dont write anithing , please change it'
      })



    }else if(formValues.photo.length < 5){
      Swal.fire({
        title:'Photo failed',
        text:'the photo need be a link and contain more of 5 characters'
      })


    }else if(formValues.population <= 100){
      Swal.fire({
        title:'Population failed',
        text:"the population it's bigger than that, don't you think? "
      })


    }else if(formValues.fundation <= 10 ){
      Swal.fire({
        title:'Fundation failed',
        text:"I know, there are cities older than Christ, but they are not available, please write again "
      })


    }else{

      axios.post('http://localhost:4000/cities/', formValues)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))

        Swal.fire({
          icon:'success',
          title:'City created with success',
          text:'you can create as many times as you want',
          confirmButtonText:'Great'
      })
    }
      
      setFormValues({
        city: '',
        country: '',
        photo: '',
        population: '',
        fundation: '',
      })
   
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
        </div>
      </div>
    </form>
  );
}

export default NewCityForm;
