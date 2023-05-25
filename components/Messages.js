import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from '../styles/Messages.module.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
export const Messages = () => {
  const number=[1,2,3,4,5];
  return (
    <div className={styles.messageContainer}>
      <div className={styles.heading}>Messages</div>
      <div className={styles.messages}>
        {number.map(()=>(
        <div className={styles.message}>
          <div >
            <Avatar className={styles.Icon}alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div>
            <div className={styles.message_name}>
            <div className={styles.Name}>Harry Kenvic</div>
          <div className={styles.msg_id}>@Harry</div>
            </div>
         
        </div>
         ))}
      </div>
      <div>  <AddCircleOutlineIcon  className={styles.AddCircleIcon}></AddCircleOutlineIcon></div>
      <div className={styles.recent_text}>Based on your Recent Activity</div>
      <div className={styles.search_text}>#users are searching for </div>
      <div className={styles.tag}>#ipl</div>
      <div className={styles.tag_image}>
      <Card>
<CardMedia component="img" className={styles.img_tag} image='https://www.hindustantimes.com/ht-img/img/2023/04/01/1600x900/India-IPL-Cricket-42_1680351129390_1680351129390_1680351245063_1680351245063.jpg'/>
      </Card>

      </div>
    </div>
    
  )
}
