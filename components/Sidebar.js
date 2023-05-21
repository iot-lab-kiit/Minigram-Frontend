import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
export const Sidebar = () => {
  return (
    // <>
    //   <div className={styles.menuContainer}>
    //     <div className={styles.menuLink}> Menu</div>
    //     <Link href='/home'>
    //       <div className='side-contain'>
    //         <div className={styles.Icon}><HomeIcon /></div>
    //         <div className={styles.Link}>Home</div>
    //       </div>
    //     </Link>
    //   </div>
    // </>
      <div>
      <div className={styles.menu}>
     <div className={styles.menuLink}> Menu</div>
      </div>
        <div className='side-contain'>
        <Link href='/home'>
       <div className={styles.homeIcon}><HomeIcon/></div> 
       <div  className={styles.homeLink}>Home</div> 
       </Link>
        </div>

      <div  className='side-contain'>
      <Link href='/search'>
      <div className={styles.searchIcon}><SearchIcon/></div>
       <div className={styles.searchLink}> Search</div>
       </Link>
        </div>

      <div className='side-contain'>
      <Link href='/explore'>
      <div className={styles.exploreIcon}><ExploreOutlinedIcon/></div> 
     <div className={styles.exploreLink}>Explore</div>
     </Link>
        </div>

      <div className='side-contain'>
      <div className={styles.messageIcon}><TextsmsOutlinedIcon/></div> 
     <div className={styles.messageLink}>Message</div>
        </div>

      <div className='side-contain'>
      <Link href='profile'>
      <div className={styles.profileIcon}><AccountCircleOutlinedIcon/></div> 
     <div className={styles.profileLink}>Profile</div>
     </Link>


      <div className={styles.sideContain}>
      <div className='account-avatar'>
      <Avatar alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div>
      <div className='account-link'>Account</div>
      <div className='account-icon'><ArrowDropDownIcon/></div> 
      </div>
      </div>
      </div>
  )
}
