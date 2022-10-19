import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/Activity.css'
import APIurl from '../APIBack'

function Activity(props) {
    
    const [activities, setActivities] = useState([])

    useEffect(() => {
        axios.get(`${APIurl}/${props.itinerary}`)
            .then(res => setActivities(res.data.response))
            .catch(err => console.error(err))
    }, [props.itinerary])


    const cardActivities = (data) => {
        return (
            <div className='activity-container'>
                <img className='activities-img' src={data.photo} alt={data.name} />
                <h5 className='activity-name'>{data.name}</h5>
            </div>
        )
    }

    return (
        <div className="container-activities">
            {activities.map(cardActivities)}
        </div>
    )
}

export default Activity