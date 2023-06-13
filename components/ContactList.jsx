import React from 'react'
import styles from '../styles/MessagesPage.module.css';
import { useState, useEffect } from "react";
import { Avatar } from '@mui/material';

export default function ContactList({ conversation, searchOn, currentUser }) {
    const [friend, setFriend] = useState([]);
    // console.log(conversation)
    useEffect(() => {
        setFriend(conversation)
    }, [])
    return (
        <>

            <div className={styles.convoArea} >
                <div>
                    <Avatar className={styles.Icon} alt="Remy Sharp" src={friend?.profilePic} />
                </div>
                <div className={styles.message_name}>
                    <div className={styles.Name}>{friend?.name}</div>
                </div>
            </div>
        </>

    )
}
