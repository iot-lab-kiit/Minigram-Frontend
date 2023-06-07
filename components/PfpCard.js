import React, { useEffect, useState } from "react";
import styles from "../styles/profile.module.css";
import styles1 from "../styles/Loader.module.css";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { likePost, fetchPost, fetchUser } from "../pages/api/api";

export const PfpCard = (props) => {
  const [users, setUsers] = useState([]);
  // const [userLikes, setLikes] = useState([]);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user_info"));
    // console.log(user);
    fetchPost(user.result._id)
      .then((resp) => {
        setPost(resp.data);
      })
      .then((data) => {
        setUsers(data);
      });
  });

  console.log(posts);

  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <div>
          <div className={styles.photo}>
            <div className={styles.details}>
              <FavoriteIcon fontSize="large" style={{ color: "white" }} />{" "}
              {/* <p> {userLikes.length} </p> */}
              <CommentIcon fontSize="large" style={{ color: "white" }} />{" "}
              {/* <p> {userComments.length} </p> */}
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

// // useEffect(() => {
//   fetchUser(props.account).then((resp) => {
//     setUsers(resp.data);
//   });
// // });

// console.log(users)

{
  // p = users.posts;
}
// console.log(users.posts)
