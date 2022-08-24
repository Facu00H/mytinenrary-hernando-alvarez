import React from 'react';
import '../styles/Card.css'

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="container-img">
          <img className="card-img" src="https://cdn.pixabay.com/photo/2022/08/11/14/28/woman-7379683__340.jpg" alt="" />
        </div>
        <div className="card-content">
          <h3>asd</h3>
          <p>asdasd</p>
          <p>asdasd</p>
          <div className="btns-container">
            <div className="btn-card">Contact us!</div>
            <div className="btn-card">More info</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
