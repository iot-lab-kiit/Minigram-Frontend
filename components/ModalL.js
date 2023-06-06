import React,{useState, useEffect} from 'react'
import styles from '../styles/ModalL.module.css';
import { Avatar } from '@mui/material';
import {fetchPost} from '../pages/api/api';
export default function ModalL({post}) {

  return (
    <>
       <div className={styles.messageContainer}>
      <div className={styles.heading}>Likes</div>
      <div className={styles.messages}>
        {post.likes.map((like)=>(
        <div className={styles.message}>
          <div >
            <Avatar className={styles.Icon}alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div>
            <div className={styles.message_name}>
            <div className={styles.Name}>{like.name}</div>
          <div className={styles.msg_id}>{like.email}</div>
            </div>
         
        </div>
         ))}
         </div>
      </div>
    </>
  )
}
