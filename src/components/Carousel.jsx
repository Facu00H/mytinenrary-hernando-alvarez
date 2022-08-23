import React from 'react'
import '../styles/Carousel.css';
import Arrow from './Arrow';
import { useEffect,useState } from 'react';

export default function Carousel() {

  const items = [
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/hong-kong_7ca23c6a.jpg', title: 'Hong Kong'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/bangkok_7e327824.jpg', title: 'Bangkok'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/londres_c8f06b1e.jpg', title: 'London'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/singapur_d652cf49.jpg', title: 'Singapur'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/paris_9b28f345.jpg', title: 'Paris'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/dubai_338723fa.jpg', title: 'Dubai'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/estambul_80aca3cc.jpg', title: 'Istanbul'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/nueva-york_5d934013.jpg', title: 'New York'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/las-vegas_b95d9c08.jpg', title: 'Las Vegas'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/roma_370225de.jpg', title: 'Rome'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/taipei_13720ebe.jpg', title: 'Taipei'},
    {url: 'https://viajes.nationalgeographic.com.es/medio/2017/05/19/tokio_b3218026.jpg', title: 'Tokyo'},
  ];

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
    console.log(intervalId)

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