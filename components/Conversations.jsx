import React from 'react'
import styles from '../styles/MessagesPage.module.css';
import { useState, useEffect } from "react";
import { Avatar } from '@mui/material';
import { fetchUser } from '../pages/api/api';

export default function Conversations({ conversation, currentUser }) {

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
        <div>
            {/* <div onClick={() => setMsgArea(true)} className={styles.message}> */}
            <div>
                <Avatar className={styles.Icon} alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div>
            <div className={styles.message_name}>
                <div className={styles.Name}>{friend?.name}</div>
                {/* <div className={styles.msg_id}>@Harry</div> */}
            </div>
            {/* </div> */}
        </div>
    )
}
