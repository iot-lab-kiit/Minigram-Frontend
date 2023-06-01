import React from 'react'
import styles from '../styles/ModalL.module.css';
import { Avatar } from '@mui/material';
export default function ModalL() {
    const number=[1,2,3,4,5];
  return (
    <>
       <div className={styles.messageContainer}>
      <div className={styles.heading}>Likes</div>
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
      </div>
    </>
  )
}
