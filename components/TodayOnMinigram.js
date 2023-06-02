import React from "react";
import styles from "../styles/Explore.module.css";

export const TodayOnMinigram = () => {
  const todayOnTwitterData = [
    {
      id: "1",
      imageUrl:
        "https://i.pinimg.com/564x/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg",
      category: "Anime",
      headline: "Classroom of the elite 3rd season coming in 2023 Autumn",
      timestamp: "X minutes ago",
    },
    {
      id: "1",
      imageUrl:
        "https://i.pinimg.com/564x/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg",
      category: "Anime",
      headline: "Classroom of the elite 3rd season is coming in 2023 Autumn",
      timestamp: "X minutes ago",
    },
    {
      id: "1",
      imageUrl:
        "https://i.pinimg.com/564x/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg",
      category: "Anime",
      headline: "Classroom of the elite 3rd season coming in 2023 Autumn",
      timestamp: "X minutes ago",
    },
    {
      id: "1",
      imageUrl:
        "https://i.pinimg.com/564x/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg",
      category: "Anime",
      headline: "Classroom of the elite 3rd season coming in 2023 Autumn",
      timestamp: "X minutes ago",
    },
  ];

  return (
    <div className={styles.todayOnTwitter}>
      {todayOnTwitterData.map((tweet) => (
        <div className={styles.tweet} key={tweet.id}>
          <img src={tweet.imageUrl} alt="Tweet" className={styles.tweetImage} />
          <div className={styles.tweetContent}>
            <span className={styles.category}>{tweet.category}</span>
            <h3 className={styles.headline}>{tweet.headline}</h3>
            <p className={styles.timestamp}>Posted {tweet.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
