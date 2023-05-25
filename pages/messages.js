import React from "react";
import { Sidebar } from '../components/Sidebar.js'
import styles from '../styles/MessagesPage.module.css';
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from "react";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const messages = () => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const names = [1, 2, 3, 4];
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.msg_body}>

      <div className={styles.msg_sbar}>
        <Sidebar />
      </div>
      <div className={styles.msg_pannel}>
        <div className={styles.msg_rotate} />
        <div className={styles.pannel}>
          <h5 className={styles.msgp_heading}>Minigram</h5>
          <div className={styles.msgp_add}>
            <h5 className={styles.msgp_messages}>Messages</h5>
            {/* The AddCircleRounded can act as a button to create new groups */}
            <AddCircleRoundedIcon className={styles.msgp_addBtn} />
          </div>
          <div className={styles.msgp_notif}>

            {number.map(() => (
              <div className={styles.message}>
                <div>
                  <Avatar className={styles.msgp_Icon} alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMTA2OTU0MjEwMDVeQTJeQWpwZ15BbWU4MDIzNjU1MTAx._V1_.jpg" ></Avatar> </div>
                <div className={styles.msgp_Name}>Harry Kenvic</div>


              </div>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.msg_view}>
        <div className={styles.msg_rotate} />
        <div className={styles.pannel}>
          <div className={styles.msgv_align}>
            <SendRoundedIcon className={styles.msgv_icn} />
            <h5 className={styles.msgp_Msg}>Your Messages</h5>
            <p className={styles.msgp_para}>Start your chat with just one click!</p>
            <button className={styles.msgv_button} onClick={() => setShowModal(true)}>Send Messages</button>
          </div>
        </div>

      </div>

      {
        showModal ? (
          <div className={styles.bgmodal}>
            <div className={styles.modalcontents}>
              <div className={styles.close} onClick={() => setShowModal(false)}>+</div>
              <img src="https://richardmiddleton.me/comic-100.png" alt="" />

              <div>
                <input className={styles.nameSearch} type="text" placeholder="What's the name" />
                <p className={styles.size}>No great matches!</p>
                <div className={styles.searchList}>
                  {names.map(() => (
                    <div>
                    </div>
                  ))}
                </div>
              </div>

                    <button className={styles.chatBtn}>Let's Chat</button>
            </div>
          </div>
        ) : null
      }

    </div>
  )
}

export default messages


