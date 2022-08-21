import React from 'react'
import '../styles/Carousel.css'

export default function Carousel() {

  const range = 4
  const start = 0
  const end = start + range

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
  ]

  const itemView = (item) => (
    <div className="item">
      <img className="citiesImgs" src={item.url} alt="" />
      <p className="citiesName">{item.title}</p>
    </div>
  )

  return (
    <>
      <div className="slide">
        {items.slice(start, end).map(itemView)}
      </div>
    </>
  )
}