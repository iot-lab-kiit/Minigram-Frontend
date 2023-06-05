import React from 'react'
import styles from '../styles/Chats.module.css';
import { format } from "timeago.js"

export default function ChatSection({ message, own }) {
    return (
        <div className={own ? styles["chats"] + " " + styles["own"] : styles["chats"]}>
            <div className={styles.chatTop}>
                <img className={styles.messageImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/800px-Outdoors-man-portrait_%28cropped%29.jpg" />
                <p className={styles.chatText}>{message.txt}</p>
            </div>
            <div className={styles.chatBottom}>{format(message.createdAt)}</div>
        </div >
    )
}