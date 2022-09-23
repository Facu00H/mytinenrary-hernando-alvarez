import React from 'react';
import { useState } from 'react';
import { useRemoveItineraryMutation } from '../features/citiesAPI';
import '../styles/Itinerary.css'
import Comments from './Comments';
import Activity from './Activities'
import { useGetIdItinerariesQuery } from '../features/citiesAPI';
import Like from './Like';
import { useSelector } from 'react-redux'

const Itinerary = () => {
const [deleItiner]=useRemoveItineraryMutation()
  const id = useSelector(state => state.auth.id)
  const role = useSelector(state => state.auth.role)

  const [visibility, setVisibility] = useState(false)
  const queryString = window.location.search.replace('?', '');
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
    data: elem,
    error,
    isLoading,
    isSuccess,
    isFailed,
  } = useGetIdItinerariesQuery(queryString)

  let data = []
  if (isLoading) {
    data = []
  } else if (isSuccess) {
    data = elem.response
  } else if (isFailed) {
    data = []
    console.log(error)
  };


  console.log(data);

  const handleDelete =(e)=>{
    let remove = (e.target.value)
    if(role === 'admin'){
      deleItiner(remove)
    }

  }
  
  
  const cardItinerary = (data) => {
    
    return (
      <div className="card-itinerary">
        <button onClick={handleDelete} value={data._id}>X</button>
        <div className="title-itinerary">
          <h3>{data.name}</h3>
        </div>
        <div className='text'>
          <div className="container-itineraryCreator">
            <div className="creator-img">
              <img className="creator-img" src={data?.user?.photo} alt={data?.user?.name} />
            </div>
            <div className="creator-data">
              <p>{data?.user?.name} {data?.user?.lastName}</p>
              <p>{data?.user?.mail}</p>
            </div>
          </div>
          <div className="box-data">
            <div className="data-container">
              <p>💲{data.price}</p>
            </div>
            <div className="data-container">
              <p>🕐{data.duration}hr</p>
            </div>
            <div className="data-container">
              <Like like={data.likes} itinerary={data._id} userId={id} />
            </div>
            <div className="tags-container">
              <p>Tags:</p>
              {data.tags.map(tag => <p>#{tag}</p>)}
            </div>
          </div>
        </div>
        <div className="itinerary-img">
          <img src={data.photo} alt={data.name} className='itinerary-photo' />
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
      {/* {elem ? elem.response.map(cardItinerary) : ''} */}
      {data.map(e => cardItinerary(e))}
    </div>
  );
}

export default Itinerary;
