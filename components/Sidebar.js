import React ,{ useState }from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import Avatar from '@mui/material/Avatar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
export const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  }
  return (
      <div className={styles.menuContainer}>
        <div className={styles.heading}> Menu</div>
        <div className={styles.Links}>
        <Link href='/home' style={{textDecoration: "none"}}>
          <div className={styles.sideContain}>
            <div ><HomeIcon className={styles.Icon}/></div>
            <div className={styles.Link}>Home</div>
          </div>
        </Link>
        <Link href='/search' style={{textDecoration: "none"}}>
          <div className={styles.sideContain}>
            <div ><SearchIcon className={styles.Icon}/></div>
            <div className={styles.Link}>Search</div>
          </div>
        </Link>
        <Link href='/explore' style={{textDecoration: "none"}}>
          <div className={styles.sideContain}>
            <div ><ExploreOutlinedIcon className={styles.Icon}/></div>
            <div className={styles.Link}>Explore</div>
          </div>
        </Link>
        <Link href='/messages' style={{textDecoration: "none"}}>
          <div className={styles.sideContain}>
            <div ><TextsmsOutlinedIcon className={styles.Icon}/></div>
            <div className={styles.Link}>Messages</div>
          </div>
        </Link>
        <Link href='/profile' style={{textDecoration: "none"}}>
          <div className={styles.sideContain}>
            <div ><AccountCircleOutlinedIcon className={styles.Icon}/></div>
            <div className={styles.Link}>Profile</div>
          </div>
        </Link>
        <div >
        <div>
      {isLoggedIn ? (
        <div className={styles.Accountbutton}>
        <Avatar src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' className={styles.userbutton}></Avatar>
          <button onClick={handleLogout} className={styles.Logout}>Logout</button>
        </div>
      ) : (
        <div className={styles.Accountbutton}>
          <AccountCircleOutlinedIcon  className={styles.userbutton}/>
          <button onClick={handleLogin} className={styles.Login}>Login</button>
        </div>
      )}
    </div>
        </div>
        </div>   
      </div>
  )
}