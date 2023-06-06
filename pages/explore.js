import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import styles from "../styles/Explore.module.css";
import styles1 from "../styles/Loader.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";
import { TodayOnMinigram } from "../components/TodayOnMinigram";
import { ExploreAll } from "../components/ExploreAll";

const Explore = () => {
  const [results, setResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [todayLoading, setTodayLoading] = useState(false);
  const [exploreLoading, setExploreLoading] = useState(false);

  return (
    <div>
      <Sidebar />
      <SearchBar setResults={setResults} setLoading={setSearchLoading} />
      {searchLoading ? (
        <div className={styles1.loaderContainer}>
          <div className={styles1.customLoader}></div>
        </div>
      ) : (
        <>
          {results.length > 0 && <SearchResultsList results={results} />}
          {todayLoading ? (
            <div className={styles1.loaderContainer}>
              <div className={styles1.customLoader}></div>
            </div>
          ) : (
            <>
              <div className={styles.heading}>TODAY ON MINIGRAM</div>
              <TodayOnMinigram />
            </>
          )}
          {exploreLoading ? (
            <div className={styles1.loaderContainer}>
              <div className={styles1.customLoader}></div>
            </div>
          ) : (
            <>
              <div className={styles.heading}>EXPLORE ALL</div>
              <ExploreAll />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Explore;
