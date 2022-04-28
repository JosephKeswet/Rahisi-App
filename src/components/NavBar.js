import React from 'react'
import userImage from '../images/Rectangle 1.png'
import planeIcon from '../images/Mask group (1).png'



const NavBar = (props) => {
  return (
    <div className='container'>
        <nav>
            <span className='logo'>
               
                <h2 className='logo-text'>
                    <span className="plane-icon"> 
                        <img src={planeIcon}  alt="" /> 
                    </span> 
                    {props.companyName}
                </h2>
                
            </span>
            <div className='user-greet'>
                <span className='greet-text'>Goodmorning,<p className='user-name'>{props.name}!</p></span>
                <img src={userImage} alt="" className='user-image' />
            </div>
        </nav>
    </div>
  )
}

export default NavBar