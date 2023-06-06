import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar.js";
import { PfpCard } from "../components/PfpCard.js";
import { PfpUser} from "../components/PfpUser.js";
import { fetchUser } from "../pages/api/api";
import SettingsIcon from "@mui/icons-material/Settings";
import styles from "../styles/profile.module.css";
import styles1 from "../styles/Loader.module.css";
import Image from "next/image";

var p = 2;
var c = 0;
var n = 4;


// const [Id, setId] = useState([]);
// useEffect(() => {
//   fetchUser().then((res) => {
//     console.log(res);
//     setId(res.data);
//   });
// }, []);

const profile = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  let s = [];
  const fetchProfileData = () => {
    fetch("https://minigram-backend.onrender.com/post")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProfile(data);
      });
  };

  useEffect(() => {
    fetchProfileData();
  }, []);
  let p = [];

  p = profile.map((info) => console.log(info.creator.username));

  return (
    <div>
      <Sidebar />
      {loading ? (
        <div className={styles1.loaderContainer}>
        <div className={styles1.customLoader}></div>
      </div>
    ) : (
      profile.map((info, index) => {
        if (index == 0) {
          return (
            <div className={styles.head}>
              <div className={styles.pfp}>
                <img
                  src="https://i.pinimg.com/564x/1c/cc/08/1ccc08a48b254afb114ae470d9c94355.jpg" //for api integration src="info.creator.profilePic"
                ></img>
              </div>
              <div className={styles.bio}>

                {/* <div className={styles.edit}>
                  
                  <button className={styles.editb}>edit profile</button>
                  <SettingsIcon sx={{ fontSize: 30 }} />
                </div> */}
                {/* <PfpUser /> */}
                <div className={styles.flex}>
                <span>{info.creator.username}</span>
                {profile.name!=info.creator.username && <PfpUser/>}
                </div>
                {console.log("Hello")}
                {console.log(profile.name)}
                <div className={styles.data}>
                  <div className={styles.posts}>
                    <div className={styles.bo}>2</div>{" "}
                    posts
                  </div>
                  <div className={styles.conex}>
                    <div className={styles.bo}>{c}</div> connections
                  </div>
                </div>
                <div className={styles.caption}>{info.creator.bio}</div>
                <div className={styles.links}>
                  <a href="https://www.w3.org/Provider/Style/dummy.html">
                    {info.creator.email}
                  </a>
                </div>
              </div>
            </div>
          );
        }
      })
    )}
      <div className={styles.content}>
        <PfpCard />
      </div>
    </div>
  );
};

export default profile;
