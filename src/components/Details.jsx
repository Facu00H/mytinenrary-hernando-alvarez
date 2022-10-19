import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Arrow from '../components/Arrow'
import { Link as LinkRouter } from 'react-router-dom'
import ModalCreate from './Modals/ModalCreate';
import APIurl from '../APIBack'

export default function Details() {

    const [cities, setCities] = useState([])
    const [itinerary, setItinerary] = useState(false)

    const queryString = window.location.search.replace('?', '');

    let url = `${APIurl}/cities/${queryString}`

    useEffect(() => {
        axios.get(url)
            .then(res => setCities([res.data.response]))
            .catch(err => console.error(err))
    }, [queryString])


    const handleNew = ()=>{
        setItinerary(true)
    }
    const handleClose = ()=>{
        setItinerary(false)
    }


    const detailsItem = item => (
        <>
            <div className="details-container">
                <div className='details-back-btn'>
                    <Arrow>
                        <LinkRouter to="/cities"><input className="arrow-img" type="image" src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="Left arrow"></input></LinkRouter>
                    <p>Go back</p>
                    </Arrow>
                    <button onClick={handleNew} className='createButonItiner'>Add New Itinerary</button>
                </div>
                <div className="details-img-body">
                    <div>
                        <img className='details-img' src={item.photo} alt="" />
                    </div>
                </div>
                <div className='details-body'>
                        <h2>Name: {item.city}</h2>
                        <h3>Country: {item.country}</h3>
                        <p>Population: {item.population}</p>
                        <p>Fundation: {item.fundation}</p>
                    </div>
            </div>
        </>
    )

    return (
        <div className='main-content'>
            
           {itinerary?<ModalCreate children={cities[0]} onClose={handleClose}/>:cities.map(detailsItem)}
        </div>
    )
}
