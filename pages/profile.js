import React from "react";
import { Sidebar } from "../components/Sidebar.js";
import styles from "../styles/profile.module.css";
import Image from "next/image";
import SettingsIcon from "@mui/icons-material/Settings";
var p = 2;
var c = 421;
const profile = () => {
  return (
    <div>
      <Sidebar />
      <div className={styles.head}>
        <div className={styles.pfp}>
          <img src="https://i.pinimg.com/564x/1c/cc/08/1ccc08a48b254afb114ae470d9c94355.jpg"></img>
        </div>
        <div className={styles.bio}>
          <div className={styles.edit}>
            <p>sunset_soul</p>
            <button className={styles.editb}>edit profile</button>
            <SettingsIcon sx={{ fontSize: 30 }} />
          </div>
          <div className={styles.data}>
            <div className={styles.posts}>
              <div className={styles.bo}>{p}</div> posts
            </div>
            <div className={styles.conex}>
              <div className={styles.bo}>{c}</div> connections
            </div>
          </div>
          <div className={styles.caption}>Got war in my mind ♡</div>
          <div className={styles.links}>
            <a href="https://www.w3.org/Provider/Style/dummy.html">
              https://www.w3.org/Provider/Style/dummy.html
            </a>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.photo}>
          <img src="https://images.wallpaperscraft.com/image/single/branch_minimalism_bw_125024_300x300.jpg" />
        </div>
        <div className={styles.photo}>
          <img src="https://i.pinimg.com/originals/c3/1a/ef/c31aef8b9be6067c4a1a82a4334fcc65.png" />
        </div>
        <div className={styles.photo}>
          <img src="https://i.scdn.co/image/ab67706c0000da84bfb952f89350d7c8d6fae332" />
        </div>
        <div className={styles.photo}>
          <img src="https://images.wallpaperscraft.com/image/single/branch_minimalism_bw_125024_300x300.jpg" />
        </div>
        <div className={styles.photo}>
          <img src="https://i.pinimg.com/originals/c3/1a/ef/c31aef8b9be6067c4a1a82a4334fcc65.png" />
        </div>
        <div className={styles.photo}>
          <img src="https://i.scdn.co/image/ab67706c0000da84bfb952f89350d7c8d6fae332" />
        </div>
      </div>
    </div>
  );
};

export default profile;
