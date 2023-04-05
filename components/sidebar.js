import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
const sidebar = () => {
  return (
    <div>
    <div className='menu'>
   <div className='menu-link'> Menu</div>
    </div>
      <div className='Home'>
     <div className='home-icon'><HomeIcon/></div> 
     <div  className='home-link'>Home</div> 
      </div>
    
    <div  className='Search'>
      <div className='search-icon'><SearchIcon/></div>
     <div className='search-link'> Search</div>
      </div>
    
    <div className='Explore'>
   <div className='explore-icon'><ExploreOutlinedIcon/></div> 
   <div className='explore-link'>Explore</div>
      
      </div>
    
    <div className='Message'>
   <div className='message-icon'><TextsmsOutlinedIcon/></div> 
   <div className='message-link'>Message</div>
      </div>
    
    <div className='Profile'>
   <div className='profile-icon'><AccountCircleOutlinedIcon/></div> 
   <div className='profile-link'>Profile</div>
      </div>
    </div>
  )
  }

export default sidebar
