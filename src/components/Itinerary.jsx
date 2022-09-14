import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/Itinerary.css'
import Comments from './Comments';
import Activity from './Activities'
import { useGetIdItinerariesQuery } from '../features/citiesAPI';

const Itinerary = () => {

  const [itinerary, setItinerary] = useState([])
  const [visibility, setVisibility] = useState(false)
  const queryString = window.location.search.replace('?', '');
  let url = `http://localhost:4000/itineraries/city/${queryString}`

  const [clicked, setClicked] = useState(false)

  function handelVisibility(e) {
    if (e.target.innerHTML === 'See more!') {
      setClicked(true)
      e.target.innerHTML = 'See less';
    } else {
      setClicked(false)
      e.target.innerHTML = 'See more!';
    }
  }



  const {
    data:elem,

} = useGetIdItinerariesQuery(queryString)

console.log(elem)
  const cardItinerary = (data) => {
    return (
      <div className="card-itinerary">
        <div className="title-itinerary">
          <h3>{data.name}</h3>
        </div>
        <div className='text'>
          <div className="container-itineraryCreator">
            <div className="creator-img">
              <img className="creator-img" src={data.user.photo} alt={data.user.name} />
            </div>
            <div className="creator-data">
              <p>Name: {data.user.name} {data.user.lastName}</p>
              <p>Mail: {data.user.mail}</p>
            </div>
          </div>
          <div className="box-data">
            <div className="data-container">
              <p>Price: {data.price}$</p>
            </div>
            <div className="data-container">
              <p>Duration: {data.duration}hr</p>
            </div>
            <div className="data-container">
              <p>Likes: {data.likes}</p>
            </div>
            <div className="tags-container">
              <p>Tags:</p>
              {data.tags.map(tag => <p>#{tag}</p>)}
            </div>
          </div>
        </div>
        <div className="itinerary-img">
          <img src="asdf" alt="img" className="" />
        </div>
        <div className="btn-container">
          <div className='btn-seeMore' onClick={handelVisibility} id={data._id} value={visibility}>See more!</div>
        </div>
        <div className={clicked === false ? 'itinerary-activities-comments' : null}>
          <Activity itinerary={data._id} />
          <Comments itinerary={data._id} />
        </div>
      </div>
    )
  }

  return (
    <div>
      {elem?elem.response.map(cardItinerary):''}
    </div>
  );
}

export default Itinerary;
