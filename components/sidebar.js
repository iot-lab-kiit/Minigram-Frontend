import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Link from 'next/link';
export const Sidebar = () => {
  return (
    <div>
    <div className='menu'>
   <div className='menu-link'> Menu</div>
    </div>
      <div className='side-contain'>
      <Link href="/pages/home">
     <div className='home-icon'><HomeIcon/></div> 
     <div  className='home-link'>Home</div> 
     </Link>
      </div>
    
    <div  className='side-contain'>
    <Link href='/pages/search'>
    <div className='search-icon'><SearchIcon/></div>
     <div className='search-link'> Search</div>
    </Link>
      
      </div>
    
    <div className='side-contain'>
    <Link href='/pages/explore'>
    <div className='explore-icon'><ExploreOutlinedIcon/></div> 
   <div className='explore-link'>Explore</div>
    </Link>
      
      </div>
    
    <div className='side-contain'>
    <Link href='/pages/messages'>
    <div className='message-icon'><TextsmsOutlinedIcon/></div> 
   <div className='message-link'>Message</div>
    </Link>
      </div>
    
    <div className='side-contain'>
    <Link href='/pages/profile'>
    <div className='profile-icon'><AccountCircleOutlinedIcon/></div> 
   <div className='profile-link'>Profile</div>
    </Link>
   
      </div>
    </div>
  )
  }
