import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar.js";
import { PfpCard } from "../components/PfpCard.js";
import { PfpUser } from "../components/PfpUser.js";
import { Alert } from "@mui/material";
import { fetchUser, fetchPost } from "../pages/api/api";
import styles from "../styles/profile.module.css";

let p = [];
const profile = () => {
  const [fetchUserId, setFetchUser] = useState("");
  const [Post, setPosts] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user_info"));
    // console.log(user);
    fetchUser(user.result._id).then((resp) => {
      setFetchUser(resp.data);
    });
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user_info"));
    // console.log(user);
    fetchPost(user.result._id).then((resp) => {
      setPosts(resp.data);
    });
  });

  if(Post!=null)
      p=Post;
      console.log(p);

  return (
    <div>
      <Sidebar />
      if (fetchUserId.username== props){" "}
      {
        <>
          <div className={styles.head}>
            <div className={styles.pfp}>
              <img
                src="https://i.pinimg.com/564x/1c/cc/08/1ccc08a48b254afb114ae470d9c94355.jpg" //for api integration src="info.creator.profilePic"
              ></img>
            </div>
            <div className={styles.bio}>
              <div className={styles.flex}>
                <span>{fetchUserId.username}</span>
                <PfpUser />
              </div>
              <div className={styles.data}>
                <div className={styles.posts}>
                  {/* {(p = fetchUserId.posts)}
                  {console.log(typeof p)} */}
                  <div className={styles.bo}>{p.length}</div> posts
                </div>
              </div>
              <div className={styles.caption}>{fetchUserId.bio}</div>
              <div className={styles.links}>
                <a href="https://www.w3.org/Provider/Style/dummy.html">
                  {fetchUserId.email}
                </a>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <PfpCard account={`${fetchUserId._id}`} />
          </div>
        </>
      }
      {/* else {<Alert severity="warning">User account doesn't exist !</Alert>} */}
    </div>
  );
};

export default profile;

{
  /* <div className={styles.edit}>
                  
                  <button className={styles.editb}>edit profile</button>
                  <SettingsIcon sx={{ fontSize: 30 }} />
                </div> */
}
{
  /* <PfpUser /> */
}

{
  /* <div className={styles.conex}>
                     <div className={styles.bo}>{c}</div> connections
                </div> */
}
