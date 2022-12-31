import React from 'react'

import "./card.css";

const Card = ({show,image,body}) => {
  return (
    <div className="card-container">
        <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="card-content">
      <div className="card-title">
        <h2>{show}</h2>
      </div> 
       <div className="card-body">
        <p> {body}</p>
      </div>

      </div>
         
      <div className="btn">
        <button> view more</button>
      </div>  
    </div>
  );
};
export default Card;
