import React from 'react'
import cardImage from '../images/CardImage.jpg'


const Cards = (props) => {
  return (
    <div className='card' >
      <img src={cardImage} className="card-image" alt="" /> 
     <div className="card-content">
      <h2>{props.title}</h2>
      <h3>{props.airway}</h3>
      <p className='time' >{props.time} <span className="green-wich">{props.GMT}</span></p>
      <h2 className="travel-price">{props.price}</h2>
      </div>
    </div>
  )
}

export default Cards