import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Link from 'next/link';
export const Sidebar = () => {
  return (
    <div>
    <div className='menu'>
   <Typography variant='h5' className='menu-link'><strong> Menu</strong></Typography>
    </div>
      <div className='side-contain'>
      <Link href='/home'>
     <div className='home-icon'><HomeIcon className='icons-sidebar'/></div> 
     <Typography variant='h6'  className='home-link'>Home</Typography> 
     </Link>
      </div>
    
    <div  className='side-contain'>
    <Link href='/search'>
    <div className='search-icon'><SearchIcon className='icons-sidebar'/></div>
     <Typography className='search-link' variant='h6'> Search</Typography>
     </Link>
      </div>
    
    <div className='side-contain'>
    <Link href='/explore'>
    <div className='explore-icon'><ExploreOutlinedIcon className='icons-sidebar'/></div> 
   <Typography className='explore-link' variant='h6'>Explore</Typography>
   </Link>
      </div>
    
    <div className='side-contain'>
    <div className='message-icon'><TextsmsOutlinedIcon className='icons-sidebar'/></div> 
   <Typography  variant='h6' className='message-link'>Message</Typography>
      </div>
    
    <div className='side-contain'>
    <Link href='profile'>
    <div className='profile-icon'><AccountCircleOutlinedIcon className='icons-sidebar'/></div> 
   <Typography  variant='h6' className='profile-link'>Profile</Typography>
   </Link>
   </div>
   

    <div className='side-contain'>
    <div className='account-avatar'>
    <Avatar alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div>
    <Typography  variant='h6' className='account-link'>Account</Typography>
    </div>
    </div>
  )
  }
