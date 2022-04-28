import React from 'react'
// import home from '../images/Home.png'
// import location from '../images/Location.png'
// import bookmark from '../images/Bookmark.png'
// import send from '../images/Send.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'



const Navigation = () => {

  

  return (
    <div className='nav-container'>
        <div className='nav-main-container'>
        <span className='nav-icon' >
            {/* <img src={home} alt="" /> */}
            <FontAwesomeIcon icon={faHouse} className='home'/>
        </span>
        <span className='nav-icon' >
            {/* <img src={location} alt="" /> */}
            <FontAwesomeIcon icon={faLocationDot} className='location' />
        </span>
        
        <span className='nav-icon'>
            {/* <img src={bookmark} alt="" /> */}
            <FontAwesomeIcon icon={faBookmark} className='bookmark' />
        </span>
        <span className='nav-icon' >
            {/* <img src={send} alt="" /> */}
            <FontAwesomeIcon icon={faPaperPlane} className='send'/>
        </span>
        </div>
        
    </div>
  )
}

export default Navigation