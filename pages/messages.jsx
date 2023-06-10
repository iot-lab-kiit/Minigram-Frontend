import { React, useState, useEffect, useRef } from "react";
import { Sidebar } from '../components/Sidebar.js'
import styles from '../styles/MessagesPage.module.css';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import ChatSection from "../components/ChatSection.jsx";
import Conversations from "../components/Conversations.jsx";
import ContactList from "../components/ContactList.jsx";
import { io } from 'socket.io-client';
import { getDM, getMessages, createMessage } from "./api/api.js";

const messages = () => {

  const [msgArea, setMsgArea] = useState(false);
  const [user, setUser] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [conversations, setConversations] = useState([]);
  const [dms, setDms] = useState([]);
  const [searchModal, setSearchModal] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [friendList, setFriendList] = useState([]);
  const [friendNames, setFriendNames] = useState([]);
  const [searchOn, setSearchOn] = useState(false);
  const [searchRes, showSearchRes] = useState([]);
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    fetch("https://minigram-backend.onrender.com/user").then(response => {
      return response.json();
    }).then(data => {
      setUser(data[0]);
    }).catch(err => {
      console.log(err.message)
    })
  })

  // console.log(user)

  // useEffect(() => {
  //   const variab = JSON.parse(localStorage.getItem('user_info'));
  //   // console.log(variab)
  //   setUser(variab)
  // })

  // useEffect(() =>
  //   console.log(user)
  // )

  useEffect(() => {
    fetch("https://minigram-backend.onrender.com/user")
      .then(response => {
        return response.json();
      }).then(res => {
        // console.log(res) 
        setFriendList([...friendList, ...res]);
      }).catch(err => {
        console.log(err.message)
      })
  }, [])

  // useEffect(() => {
  //   friendList.map((data) => {
  //     setFriendNames(data)
  //     console.log(data.name)
  //   })
  // }, [])

  useEffect(() => {
    socket.current = io("ws://minigram-backend.onrender.com:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setDms((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      console.log(users)
      //   setOnlineUsers(
      //     user.followings.filter((f) => users.some((u) => u.userId === f))
      //   );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      getDM(user._id).then((res) => {
        setConversations(res.data);
      })
        .catch((err) =>
          console.log(err));
    }
    getConversations();
  }, [user])

  // console.log(conversations)

  useEffect(() => {
    const getMsgs = async () => {
      try {
        const res = await getMessages(currentChat?._id)
        setDms(res.data.messages);
      } catch (err) {
        console.log(err);
      }
    };
    getMsgs();
  }, [currentChat]);

  // console.log(conversations)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id
    }
    console.log(message);
    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });

    try {
      console.log("HELLO")
      const res = await createMessage(message)
      console.log(res.data)
      setDms([...dms, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
    setNewMessage("");
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dms]);

  const search = (data) => {
    const result = data?.name.toLowerCase().includes(searchName);
    console.log(result)
    if (result) {
      console.log(data)
      showSearchRes(data)
    }
  }



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
          </div>
          <div className={styles.msgp_notif}>
            <div className={styles.messages}>
              {conversations.map((conversation) => (
                <div onClick={() => {
                  setCurrentChat(conversation)
                }}>
                  <div onClick={() => setMsgArea(true)} className={styles.message}>
                    <Conversations conversation={conversation} searchOn={searchOn} currentUser={user} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <AddCircleRoundedIcon className={styles.msgp_addBtn} onClick={() => { setSearchModal(true), setSearchOn(true) }} />
        </div>
      </div>

      <div className={styles.msg_view}>
        <div className={styles.msg_rotate} />
        <div className={styles.pannel}>
          {
            msgArea ? (
              <div className={styles.chatZone}>
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
                          <input className={styles.chatInput} placeholder="Text" onChange={(e) => setNewMessage(e.target.value)} value={newMessage} />
                          <button className={styles.chatSendButton} onClick={(e) => handleSubmit(e)}>Send</button>
                        </div>
                      </> : null}
                </div>
                <div className={styles.chatClose} onClick={() => setMsgArea(false)}>+</div>
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

      {
        searchModal ? (
          <div className={styles.bgmodal}>
            <div className={styles.modalcontents}>
              <div className={styles.close} onClick={() => { setSearchOn(false), setSearchModal(false) }}>+</div>
              <div>
                <input className={styles.nameSearch} type="text" placeholder="Search names" value={searchName} onChange={(e) => { setSearchName(e.target.value), setSearchOn(true) }} />

                <div className={styles.searchList}>
                  {friendList.map((conversation) =>
                    <div onClick={() => {
                      setCurrentChat(conversation)
                    }}>
                      <div onClick={() => { setMsgArea(true), setSearchModal(false) }} className={styles.message}>
                        <ContactList conversation={conversation} searchOn={searchOn} currentUser={user} />
                      </div>
                    </div>
                  )}
                  {/* {friendList.map((data)=> console.log(data))} */}
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}

export default messages;
