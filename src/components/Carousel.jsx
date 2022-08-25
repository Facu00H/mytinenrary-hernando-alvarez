import React from 'react'
import '../styles/Carousel.css';
import Arrow from './Arrow';
import { useEffect,useState } from 'react';
 carousimport { items } from '../data/ArrayCiudades'

export default function Carousel() {


  const range = 4
  const [getStart, setStart] = useState(0)
  const [getEnd, setEnd] = useState(getStart + range);
  const [intervalId, setIntervalId] = useState();

  function previus(){
    if(getStart >= range){
      setStart( getStart - range );
      setEnd( getEnd - range );
    }else{
      setEnd(items.length);
      setStart(items.length - range);
    }
    clearInterval(intervalId);
  }

  function next(){
    if(getEnd < items.length){
      setStart( getStart + range );
      setEnd( getEnd + range );
    }else{
      setStart(0);
      setEnd(range)
    }
    clearInterval(intervalId);
  }


  useEffect(() => {
    let id = setInterval( function(){ 
      next();
    }, 3000)

    setIntervalId(id)

    return () => clearInterval(intervalId);
  },[getStart]);
  



  const itemView = (item) => (
    <div className="item">
        <img className="citiesImgs" src={item.url} alt="" />
        <p className="citiesName">{item.title}</p>
    </div>
  )

  return (
    <>
      <div className="slide-container">
        <div className="slide-title">
          <h1>Popular MYtineraries</h1>
        </div>
        <div className="slide-arrow1">
          <Arrow click={previus}>
            <input className="arrow-img" type="image" src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="Left arrow"></input>
          </Arrow>
        </div>
        <div className="slide">
          {items.slice(getStart, getEnd).map(itemView)}
        </div>
        <div className="slide-arrow2">
          <Arrow click={next}>
            <input className="arrow-img" type="image" src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="Right arrow"></input>
          </Arrow>
        </div>
      </div>
    </>
  )
}