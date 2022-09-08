import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import '../styles/Itinerary.css'

const Itinerary = () => {

  const [itinerary, setItinerary] = useState([])
  const [visibility, setVisibility] = useState(false)
  const queryString = window.location.search.replace('?', '');
  let url = `http://localhost:4000/itineraries/city/${queryString}`


  function handelVisibility (e) {
    if(e.target.innerHTML === 'See more!'){
      e.target.innerHTML = 'See less';
    }else{
      e.target.innerHTML = 'See more!';
    }
  }

  useEffect(() => {
    axios.get(url)
    .then( res => setItinerary(res.data.response))
    .catch( err => console.error(err))
  }, [])

  console.log(itinerary)

  const boxData = (data) => {
    return (
      <div className="box-data">

      </div>
    )
  }

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
        <img src="asdf" alt="img" className=""/>
      </div>
      <div className="btn-container">
        <div className='btn-seeMore' onClick={handelVisibility} id={data._id} value={visibility}>See more!</div>
      </div>
    </div>
  )
}

  return (
    <div>
      {itinerary.map(cardItinerary)}
    </div>
  );
}

export default Itinerary;
