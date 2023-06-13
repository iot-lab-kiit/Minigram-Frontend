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
    fetchPost(user.result._id).then((resp) => {
      setPost(resp.data);             
    });
  });

  let p = [];
  if (posts != null) p = posts;
  console.log(p);
  // p = [
  //   "https://i.pinimg.com/originals/12/04/94/120494876f3572f1ecb1f722fcc6e8b0.png",
  //   "https://i.pinimg.com/736x/d2/8c/7c/d28c7c485b4a6a081610e0adaa8d5789--tree-wallpaper-wallpaper-desktop.jpg",
  //   "https://i.pinimg.com/originals/97/76/ea/9776ea3c44ede2ba53f297c4c99b70a5.jpg",
  //   "https://i.scdn.co/image/ab67706c0000da84bfb952f89350d7c8d6fae332",
  // ];
  return (
    <div className={styles.grid}>
      {p.map((user) => (
        <div>
          <div
            className={styles.photo}
            style={{
              backgroundImage: `url(${user})`,
              //  `url(${user})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {console.log(`url(${user})`)}
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
