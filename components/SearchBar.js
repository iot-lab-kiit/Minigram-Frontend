import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Explore.module.css"

const data = [
    { id: "1", tag: "ipl" },
    { id: "2", tag: "pubg" },
    { id: "3", tag: "parliament" },
    { id: "4", tag: "nature" },
    { id: "5", tag: "AI" },
    { id: "6", tag: "gaming" },
    { id: "7", tag: "valorant" },
    { id: "8", tag: "global warming" },
    { id: "9", tag: "internet" },
    { id: "10", tag: "anime" },
    { id: "11", tag: "KIIT" },
  ];

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");
  
    const fetchData = (value) => {
      const results = data.filter((item) => {
        return (
          value &&
          item &&
          item.tag &&
          item.tag.toLowerCase().includes(value.toLowerCase())
        );
      });
      setResults(results);
    };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
  
    return (
      <div>
        {/* <Sidebar /> */}
        <div className={styles.searchbarcontainer}>
          <div className={styles.inputwrapper}>
            <SearchIcon sx={{ fontSize: 25 }} id={styles.searchicon} />
            <input
              className={styles.inputselector}
              placeholder="Type to search..."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  };