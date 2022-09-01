import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Arrow from '../components/Arrow'
import { Link as LinkRouter } from 'react-router-dom'

export default function Details() {

    const [cities, setCities] = useState([])

    console.log(cities);
    const queryString = window.location.search.replace('?', '');

    let url = `http://localhost:4000/cities/${queryString}`

    useEffect(() => {
        axios.get(url)
            .then(res => setCities([res.data.response]))
            .catch(err => console.error(err))
    }, [])

    // cities.find(e => {
    //     if (e._id == query.replace("?", "")) {
    //         setId(e._id)
    //         // e.map(e => setCities(e))
    //     } else {
    //         // console.log('chau');
    //     }
    // })

    // console.log(cities);

    const detailsItem = item => (
        <>
            <div className="details-container">
                <div className='details-back-btn'>
                    <Arrow>
                        <LinkRouter to="/cities"><input className="arrow-img" type="image" src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="Left arrow"></input></LinkRouter>
                    </Arrow>
                    <p>Go back</p>
                </div>
                <div className="details-img-body">
                    <div>
                        <img className='details-img' src={item.photo} alt="" />
                    </div>
                    <div className='details-body'>
                        <h2>Name: {item.city}</h2>
                        <h3>Country: {item.country}</h3>
                        <p>Population: {item.population}</p>
                        <p>Fundation: {item.fundation}</p>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <div>
            {cities.map(detailsItem)}
        </div>
    )
}
