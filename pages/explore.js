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

  return (
    <div>
      <Sidebar />
      <SearchBar setResults={setResults} />
      {results.length > 0 && <SearchResultsList results={results} />}
      <div className={styles.heading}>TODAY ON MINIGRAM</div>
      <TodayOnMinigram />
      <div className={styles.heading}>EXPLORE ALL</div>
      <ExploreAll />
    </div>
  );
};

export default Explore;
