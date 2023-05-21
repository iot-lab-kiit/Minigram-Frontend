import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from '../styles/Messages.module.css';
export const Messages = () => {
  return (
  <div>
   <div className={styles.message_icon_1}>
    <Avatar alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div> 
    <div className={styles.message_name_1}>Harry Kenvic</div>
    <div className={styles.message_icon_2}>
    <Avatar alt="Remy Sharp" src="https://i.guim.co.uk/img/media/5f07f487f8e60d26a2430eaad5ddf127a975c6bd/0_1303_3600_2158/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c9c552bf9e3bd323f7f3870712f3d5b5" ></Avatar> </div> 
    <div className={styles.message_name_2}>Harry Kenvic</div>
    <div className={styles.message_icon_3}>
    <Avatar alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div> 
    <div className={styles.message_name_3}>Harry Kenvic</div>
    <div className={styles.message_icon_4}>
    <Avatar alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div> 
    <div className={styles.message_name_4}>Harry Kenvic</div>
    <div className={styles.message_tag}>Message</div>
  </div>
  )
}
