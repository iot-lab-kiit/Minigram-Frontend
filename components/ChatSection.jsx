import React from 'react'
import styles from '../styles/Chats.module.css';

export default function ChatSection({ own }) {
    return (
        <div className={own ? styles["chats"] + " " + styles["own"] : styles["chats"]}>
            <div className={styles.chatTop}>
                <img className={styles.messageImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/800px-Outdoors-man-portrait_%28cropped%29.jpg" />
                <p className={styles.chatText}>Hello this is message</p>
            </div>
            <div className={styles.chatBottom}>1 hour ago</div>
        </div >
    )
}