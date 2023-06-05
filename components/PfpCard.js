import React, { useEffect, useState } from "react";
import styles from "../styles/profile.module.css";
import styles1 from "../styles/Loader.module.css";
export const PfpCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  let s = [];
  const fetchUserData = () => {
    fetch("https://minigram-backend.onrender.com/post")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false); // Set loading to false when data fetched
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className={styles.grid}>
      {loading ? (
        <div className={styles1.loaderContainer}>
          <div className={styles1.customLoader}></div>
        </div>
      ) : (
      users.map((user) => (
        <div>
          <div className={styles.photo}>
            {console.log(user.creator.posts)}
            {(s = Object.values(user.creator.posts))}
            <img
              src="https://i.scdn.co/image/ab67706c0000da84bfb952f89350d7c8d6fae332" //for api integration src= {s}
              alt="image"
            />
          </div>
        </div>
      ))
      )}
      
    </div>
  );
};
