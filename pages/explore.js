<<<<<<< dev-anshul
import React from 'react'

const explore = () => {
=======
import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import styles from "../styles/Explore.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";
import { TodayOnMinigram } from "../components/TodayOnMinigram";
import { ExploreAll } from "../components/ExploreAll";
const Explore = () => {
  const [results, setResults] = useState([]);
>>>>>>> local
  return (
    <div>explore</div>
  )
}

export default explore