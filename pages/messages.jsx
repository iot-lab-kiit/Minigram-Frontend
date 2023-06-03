import React from "react";
import { Sidebar } from '../components/Sidebar.js'
import styles from '../styles/MessagesPage.module.css';
import axios from "axios";
import { useState, useEffect } from "react";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ChatSection from "../components/ChatSection.jsx";
import Conversations from "../components/Conversations.jsx";
import { useRef } from "react";
import { getDM, fetchUser, getMessages, createMessage } from "./api/api.js";

const messages = () => {

  // const [createGroup, setCreateGroup] = useState(false);
  const [msgArea, setMsgArea] = useState(false);
  const [user, setUser] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();
  const [conversations, setConversations] = useState([]);
  // const [friend, setFriend] = useState(null);
  const [dms, setDms] = useState([]);

  useEffect(() => {

    fetch("https://minigram-backend.onrender.com/user").then(response => {
      return response.json();
    }).then(data => {
      setUser(data[0]);
    }).catch(err => {
      console.log(err.message)
    })
  }, [])

  // console.log(user)
  useEffect(() => {
    const getConversations = async () => {
      getDM(user._id).then((res) => {
        // console.log(res)
        setConversations(res.data);
      })
        .catch((err) =>
          console.log(err));
    }
    getConversations();
  }, [user])
  console.log(conversations)

  // const messaging = async () => {
  //   // getMessages(currentChat?._id).then((res) => {
  //   //     setdms(res.data);
  //   //     console.log(dms);
  //   // })
  //   //     .catch((err) =>
  //   //         console.log(err));
  //   try {
  //     const res = await getMessages(currentChat?._id)
  //     const friendId = currentChat?.members.find((m) => m !== user._id);
  //     fetchUser(friendId).then((res) => {
  //       setFriend(res.data);
  //     }).catch((err) => console.log(err))
  //     console.log(res.data)
  //     setDms(res.data.messages);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // useEffect(() => {
  //   messaging();
  // }, [currentChat])



  useEffect(() => {
    const getMsgs = async () => {
      try {
        const res = await getMessages(currentChat?._id)
        // console.log(res)
        setDms(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMsgs();
  }, [currentChat]);

  console.log(dms)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    try {
      const res = await createMessage(msg);
      setDms([...dms, res.data]);
      // console.log(res.data)
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const message = {
  //     sender: user._id,
  //     text: newMessage,
  //     conversationId: currentChat._id
  //   }
  //   console.log(message);
  //   // console.log(e))
  //   const receiverId = currentChat.members.find(
  //     (member) => member !== user._id
  //   );
  //   // console.log(receiverId)
  //   try {
  //     createMessage(message.text, user._id)
  //     const res = await getMessages(user._id)
  //     // const res = await axios.post("https://minigram-backend.onrender.com/messages", message);
  //     setDms([...dms, res]);
  //     console.log(res)
  //     setNewMessage("");
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   setNewMessage("");
  // }

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  // console.log(currentChat)

  // useEffect(() => {
  //   {
  //     dms?.map((message) => {
  //       console.log(message)
  //     })
  //   }
  // })

  return (
    <div className={styles.msg_body}>

      <div className={styles.msg_sbar}>
        <Sidebar />
      </div>

      <div className={styles.msg_pannel}>
        <div className={styles.msg_rotate} />
        <div className={styles.pannel}>
          <div className={styles.msgp_add}>
            <div className={styles.heading}>Messages</div>
          </div >
          <div className={styles.msgp_notif}>
            <div className={styles.messages}>
              {conversations.map((conversation) => (
                <div onClick={() => {
                  setCurrentChat(conversation)
                }}>
                  <div onClick={() => setMsgArea(true)} className={styles.message}>
                    <Conversations conversation={conversation} currentUser={user} />
                  </div>
                </div>
              ))}

            </div>
          </div>
          <AddCircleRoundedIcon className={styles.msgp_addBtn} />
        </div>
      </div>

      <div className={styles.msg_view}>
        <div className={styles.msg_rotate} />
        <div className={styles.pannel}>
          {
            msgArea ? (
              <div>
                <div className={styles.chatClose} onClick={() => setMsgArea(false)}>+</div>
                <div className={styles.chatContents}>
                  {
                    currentChat ?
                      <>
                        <div className={styles.chatBoxTop}>
                          {dms?.map((message) => (
                            <div ref={scrollRef}>
                              <ChatSection message={message} own={message.sender === user._id} />
                            </div>
                          ))}
                        </div>
                        <div className={styles.chatBoxBottom}>
                          <textarea className={styles.chatInput} placeholder="Text" onChange={(e) => setNewMessage(e.target.value)} value={newMessage} ></textarea>
                          <button className={styles.chatSendButton} onClick={(e) => handleSubmit(e)}>Send</button>
                        </div>
                      </> : <span className={styles.noChat}>No Chat</span>}
                </div>
              </div>
            ) :
              <div className={styles.msgv_align}>
                <SendRoundedIcon className={styles.msgv_icn} />
                <h5 className={styles.msgp_Msg}>Your Messages</h5>
                <p className={styles.msgp_para}>Start your chat with just one click!</p>
                <button className={styles.msgv_button}>Send Messages</button>
              </div>
          }
        </div>

      </div>


      {/* {
        createGroup ? (
          <div className={styles.bgmodal}>
            <div className={styles.modalcontents}>
              <div className={styles.close} onClick={() => setCreateGroup(false)}>+</div>
              <img src="https://richardmiddleton.me/comic-100.png" alt="" />
              <div>
                <input className={styles.nameSearch} type="text" placeholder="Search names" />
                <p className={styles.size}>No great matches!</p>
                <div className={styles.searchList}>
                  {names.map(() => (
                    <div>
                    </div>
                  ))}
                </div>
              </div>

              <button className={styles.chatBtn}>Create Group</button>
            </div>
          </div>
        ) : null
      } */}

    </div>
  )
}

export default messages;
