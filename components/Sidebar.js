import React, { useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Icon from '@mui/material/Icon';
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

export const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
  
  if (currentPath === "/home") {
    setActiveItem("home");
  } else if (currentPath === "/search") {
    setActiveItem("search");
  } else if (currentPath === "/explore") {
    setActiveItem("explore");
  } else if (currentPath === "/messages") {
    setActiveItem("messages");
  } else if (currentPath === "/profile") {
    setActiveItem("profile");
  } else if (currentPath === "/createpost") {
    setActiveItem("createpost");
  }

  }, []);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.heading}> Menu</div>
      <div className={styles.Links}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div
            className={`${styles.sideContain} ${
              activeItem === "home" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("home")}
          >
            <div>
              <HomeIcon className={styles.Icon} />
            </div>
            <div className={styles.Link}>Home</div>
          </div>
        </Link>
        <Link href="/search" style={{ textDecoration: "none" }}>
          <div
            className={`${styles.sideContain} ${
              activeItem === "search" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("search")}
          >
            <div>
              <SearchIcon className={styles.Icon} />
            </div>
            <div className={styles.Link}>Search</div>
          </div>
        </Link>
        <Link href="/explore" style={{ textDecoration: "none" }}>
          <div
            className={`${styles.sideContain} ${
              activeItem === "explore" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("explore")}
          >
            <div>
              <ExploreOutlinedIcon className={styles.Icon} />
            </div>
            <div className={styles.Link}>Explore</div>
          </div>
        </Link>
        <Link href="/messages" style={{ textDecoration: "none" }}>
          <div
            className={`${styles.sideContain} ${
              activeItem === "messages" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("messages")}
          >
            <div>
              <TextsmsOutlinedIcon className={styles.Icon} />
            </div>
            <div className={styles.Link}>Messages</div>
          </div>
        </Link>
        <Link href="/profile" style={{ textDecoration: "none" }}>
          <div
            className={`${styles.sideContain} ${
              activeItem === "profile" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("profile")}
          >
            <div>
              <AccountCircleOutlinedIcon className={styles.Icon} />
            </div>
            <div className={styles.Link}>Profile</div>
          </div>
        </Link>
        <Link href="/createpost" style={{ textDecoration: "none" }}>
          <div
            className={`${styles.sideContain} ${
              activeItem === "createpost" ? styles.active : ""
            }`}
            onClick={() => handleItemClick("createpost")}
          >
            <div>
              <AddCircleIcon className={styles.Icon} />
            </div>
            <div className={styles.Link}>Create Post</div>
          </div>
        </Link>
        <div>
          <div>
            {isLoggedIn ? (
              <div className={styles.accountButton}>
                <Avatar
                  src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg"
                  className={styles.userbutton}
                ></Avatar>
                <button
                  onClick={handleLogout}
                  className={styles.Logout}
                ></button>
              </div>
            ) : (
              <div className={styles.accountButton}>
                <AccountCircleOutlinedIcon className={styles.userbutton} />
                <Link className={styles.loginLink} href="/signup">
                  <button onClick={handleLogin} className={styles.Login}>
                    Login/Signup
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
