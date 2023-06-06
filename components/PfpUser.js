import React from "react";
import styles from "../styles/profile.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
export const PfpUser = () => {
  return (
    <div className={styles.edit}>
      <button className={styles.editb}>edit profile</button>
      <SettingsIcon sx={{ fontSize: 30 }} />
    </div>
  );
};


