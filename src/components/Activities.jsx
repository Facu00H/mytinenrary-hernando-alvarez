import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import '../styles/Activities.css'

function Activity() {

    const [itinerary, setItinerary] = useState([])
    const [activities, setActivities] = useState([])
    const queryString = window.location.search.replace('?', '');
    let url = `http://localhost:4000/itineraries/city/${queryString}`

    useEffect(() => {
        axios.get(url)
            .then(res => setItinerary(res.data.response))
            .catch(err => console.error(err))
    }, [])


    useEffect(() => {
        itinerary.forEach(itinerary => {
            axios.get(`http://localhost:4000/activities/itinerary/${itinerary._id}`)
                .then(res => setActivities(res.data.response))
                .catch(err => console.error(err))
        })
    }, [itinerary])

    const cardActivities = (data) => {
        return (
            <div>
                <div className="container-activities">
                    <div>
                        <div>
                            <img className="activities-img" src={data.photo} alt={data.name} />
                        </div>
                        <div className="activities-name">
                            <p>Name: {data.name}</p>
                        </div>
                    </div>
                </div>
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