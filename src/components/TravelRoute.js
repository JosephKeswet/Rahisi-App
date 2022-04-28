import React from 'react'
import NavBar from './NavBar'
import cardImage from '../images/CardImage.jpg'




const TravelRoute = () => {
  return (
    <div>
       <img src={cardImage} className='main-image' alt="" /> 
      <div className='route-content' >
      <h3>Nairobi <span>13:30 <small>GMT+3</small></span></h3>
      <h2>K 79,104</h2>
      <h2>Kenya Airways</h2>
      <p>This flight is scheduled to leave Moi International Airport, Mombasa(MBA) by 13:30 GMT+3, to arrive Kenyatta Airport,Nairobi(NBA) by... See all</p>
      </div>
    </div>
  )
}

export default TravelRoute