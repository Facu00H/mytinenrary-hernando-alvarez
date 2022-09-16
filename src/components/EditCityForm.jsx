import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
const EditCityForm = () => {
  const [ bd, setBd ] = useState([])
  const [ citySelected, setCitySelected ] = useState('')
  const [ query, setQuery ] = useState('')
  const [ city, setCity ] = useState('')
  const [formValues, setFormValues] = useState({
    photo: city.photo,
    population: city.population,
    fundation: city.fundation,
  }) 

  let url = `http://localhost:4000/cities/${query}`

  useEffect(() => {
    if(citySelected !== ""){
      setQuery(bd.find(element => element.city === citySelected.country)._id)
      setCity(bd.find(element => element.city === citySelected.country))
    }
  }, [citySelected])

  useEffect(() => {
    axios.get('http://localhost:4000/cities')
      .then(res => setBd(res.data.response))
      .catch(err => console.error(err))
  }, [])


  function selectCity( e ){
    const {name, value} = e.target;
    setCitySelected( {[name]: value} )
  }

  function changeValue( e ){
    const {name, value} = e.target;
    setFormValues( {...formValues, [name]: value} )
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    if(formValues.photo.length < 4){
      Swal.fire({
        title:'Photo Failed',
        text:'the photo need has more of 4 characters'
      })
    }else if( formValues.population <= 100 ){
      Swal.fire({
        title:'Population Failed',
        text:'the Population need has more of 100 people'
      })
    }else if(formValues.fundation <= 10 ){
      Swal.fire({
        title:'Fundation Failed',
        text:'I know, there are cities older than Christ, but they are not available, please write again '
      })
    }else{
      
            axios.patch(url, formValues)
              .then((response) => console.log(response))
              .catch((error) => console.log(error))

              Swal.fire({
                icon:'success',
                title:'City created with success',
                text:'please look or read or create more cities',
                confirmButtonText:'Do It'
            })

    }




      setFormValues({
        photo: '',
        population: '',
        fundation: '',
      })
  } 
  
  const generateOption = (data) => {
    return ( <option value={data} >{data}</option> )
  }


  return (
    <form method="post" className="main-content">
      <div className='form-container'>
        <div className='select'>
          <p className='select-title'>Select City to modify:</p>
          <select name='country' onChange={selectCity} className='input-city'>
            {bd.map( e => generateOption(e.city))}
          </select>
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
        
      </div>
    </form>
  );
}

export default EditCityForm;
