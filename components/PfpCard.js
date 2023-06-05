import React, { useEffect, useState } from "react";
import styles from "../styles/profile.module.css";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { fetchPosts } from "../pages/api/api";
import CardMedia from "@mui/material/CardMedia";
export const PfpCard = () => {
  const [users, setUsers] = useState([]);
  let s = [];
  const fetchUserData = () => {
    fetch("https://minigram-backend.onrender.com/post")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };
  const [userLikes, setLikes] = useState([]);
  const [userComments, setComments] = useState([]);
  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    fetchPosts().then((res) => {
      console.log("hy");
      console.log(res);
      setLikes(res.data);
    });
  }, []);
  console.log(userLikes);
  

  // useEffect(() => {
  //   getComments().then((resp) => {
  //     console.log("hy");
  //     console.log(resp);
  //     setComments(resp.data);
  //   });
  // }, []);

  // console.log("comments");
  // console.log(userComments);
  let c = 0;

  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <div>
          <div className={styles.photo}>
            {console.log(user.creator.posts)}
            {(s = Object.values(user.creator.posts))}
            {/* 
            <img
              src={s[c++]} //for api integration src= {s}
              alt=" post"
            /> */}
            {/* {photo.style.backgroundImage="url('https://i.scdn.co/image/ab67706c0000da84bfb952f89350d7c8d6fae332')"} */}

            <div className={styles.details}>
              <FavoriteIcon fontSize="large" style={{ color: "white" }} />{" "}
              <p> {userLikes.length} </p>
              <CommentIcon fontSize="large" style={{ color: "white" }} />{" "}
              <p> {userComments.length} </p>
              {console.log(userComments)}
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
