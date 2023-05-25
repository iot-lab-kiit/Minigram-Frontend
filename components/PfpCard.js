import React from "react";
import styles from "../styles/profile.module.css";
export const PfpCard = () => {
  return (
     <>
      <div className={styles.photo}>
        <img src="https://images.wallpaperscraft.com/image/single/branch_minimalism_bw_125024_300x300.jpg" />
      </div>
      <div className={styles.photo}>
          <img src="https://i.pinimg.com/originals/c3/1a/ef/c31aef8b9be6067c4a1a82a4334fcc65.png" />
        </div>
        <div className={styles.photo}>
          <img src="https://i.scdn.co/image/ab67706c0000da84bfb952f89350d7c8d6fae332" />
        </div>
        </>
  );
};


