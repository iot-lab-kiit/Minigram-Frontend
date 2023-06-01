import React from 'react'
import styles from '../styles/createPost.module.css';
// import UploadImg from "../public/photo.png";
import UploadImg from "../public/next.svg";
function createpost() {
  return (
    <div className={styles.miniGramCreatePost}>
    <img src={UploadImg}></img>


    </div>
  )
}

export default createpost