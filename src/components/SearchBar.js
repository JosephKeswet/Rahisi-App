import React from 'react'
import searchIcon from '../images/Frame 5.png'



const SearchBar = () => {
  return (
    <div className='search-bar'>
      
          <input type="text" name="" id="" placeholder='Search available flights' />
          
          {/* Create a data.js component and watch a tutorial on how to make search bar functional*/}
          <div className='search-icon'>
            <button className='search-button' type='submit' ><img src={searchIcon} alt=""   /></button>  
          </div>
          
                     
    </div>
  )
}

export default SearchBar