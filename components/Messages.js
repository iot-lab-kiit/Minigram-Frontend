import React from 'react'
import Avatar from '@mui/material/Avatar';
import styles from '../styles/Messages.module.css';
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
          <div className={styles.Name}>Harry Kenvic</div>
        </div>
         ))}
      </div>
    </div>
    
  )
}
