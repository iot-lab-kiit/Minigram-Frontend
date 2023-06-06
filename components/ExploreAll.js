import React from "react";
import styles from "../styles/Explore.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const exploreData = [
  { id: 1, heading: "Election" },
  { id: 2, heading: "Sports" },
  // Add more data here for other categories
];

export const ExploreAll = () => {
  const handleClick = (category) => {
    // Handle click logic for each category
    console.log(`Clicked on ${category}`);
  };

  return (
    <div className={styles.exploreAll}>
      {exploreData.map((item) => (
        <div
          className={styles.exploreItem}
          key={item.id}
          onClick={() => handleClick(item.heading)}
        >
          <span className={styles.exploreHeading}>{item.heading}</span>
          <ArrowForwardIcon className={styles.arrowIcon} />
        </div>
      ))}
    </div>
  );
};
