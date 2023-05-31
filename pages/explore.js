import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import styles from "../styles/Explore.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";

const Explore = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <Sidebar />
      <SearchBar setResults={setResults} />
      {results.length > 0 && <SearchResultsList results={results} />}
    </div>
  );
};

export default Explore;
