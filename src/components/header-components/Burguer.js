import React from 'react'

export default function Burguer(props) {


  return (
      <div className='navegation' id='burguer' onClick={props.click}>
        <div className="burguer">
          <img src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt="Menu button" className="imgBurguer"/>
        </div>
      </div>
  )};
