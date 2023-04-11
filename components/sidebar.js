import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
export const Sidebar = () => {
  return (
    <div>
    <div className='menu'>
   <div className='menu-link'> Menu</div>
    </div>
      <div className='side-contain'>
      <Link href='/home'>
     <div className='home-icon'><HomeIcon/></div> 
     <div  className='home-link'>Home</div> 
     </Link>
      </div>
    
    <div  className='side-contain'>
    <Link href='/search'>
    <div className='search-icon'><SearchIcon/></div>
     <div className='search-link'> Search</div>
     </Link>
      </div>
    
    <div className='side-contain'>
    <Link href='/explore'>
    <div className='explore-icon'><ExploreOutlinedIcon/></div> 
   <div className='explore-link'>Explore</div>
   </Link>
      </div>
    
    <div className='side-contain'>
    <div className='message-icon'><TextsmsOutlinedIcon/></div> 
   <div className='message-link'>Message</div>
      </div>
    
    <div className='side-contain'>
    <Link href='profile'>
    <div className='profile-icon'><AccountCircleOutlinedIcon/></div> 
   <div className='profile-link'>Profile</div>
   </Link>
   

    <div className='side-contain'>
    <div className='account-avatar'>
    <Avatar alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div>
    <div className='account-link'>Account</div>
    <div className='account-icon'><ArrowDropDownIcon/></div> 
    </div>
    </div>
    </div>
  )
  }
