import React from 'react'
import styles from '../styles/MessagesPage.module.css';
import { useState, useEffect } from "react";
import { Avatar } from '@mui/material';
import { fetchUser } from '../pages/api/api';

export default function Conversations({ conversation, searchOn, currentUser }) {

    const [friend, setFriend] = useState(null);

    useEffect(() => {
        if (conversation) {
            const friendId = conversation.members?.find((m) => m !== currentUser._id);
            fetchUser(friendId).then((res) => {
                setFriend(res.data);
            }).catch((err) => console.log(err))
        }
    }, [conversation, currentUser])

    return (
        <div className={styles.convoArea} >
            <div>
                <Avatar className={styles.Icon} alt="Remy Sharp" src={friend?.profilePic} />
            </div>
            <div className={styles.message_name}>
                <div className={styles.Name}>{friend?.name}</div>
            </div>
        </div>
    )
}
