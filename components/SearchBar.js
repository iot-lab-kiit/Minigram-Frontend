import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/Explore.module.css";

const data = [
  { id: "1", tag: "#ipl", popularity: 120 },
  { id: "2", tag: "#pubg", popularity: 90 },
  { id: "3", tag: "#parliament", popularity: 210 },
  { id: "4", tag: "#nature", popularity: 13 },
  { id: "5", tag: "#AI", popularity: 76 },
  { id: "6", tag: "#gaming", popularity: 45 },
  { id: "7", tag: "#valorant", popularity: 38 },
  { id: "8", tag: "#global warming", popularity: 23 },
  { id: "9", tag: "#internet", popularity: 66 },
  { id: "10", tag: "#anime", popularity: 156 },
  { id: "12", tag: "#asus", popularity: 39 },
  { id: "13", tag: "#goa", popularity: 21 },
  { id: "14", tag: "#IIT", popularity: 100 },
  { id: "15", tag: "#nike", popularity: 67 },
  { id: "16", tag: "#OnePlus", popularity: 99 },
];

// Function to retrieve the top 10 tags based on popularity
const getTopTags = () => {
  // Sort the tags based on popularity in descending order
  const sortedTags = [...data].sort((a, b) => b.popularity - a.popularity);

  // Return only the top 10 tags
  return sortedTags.slice(0, 10);
};

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  // Fetch the top tags on component mount
  useEffect(() => {
    const topTags = getTopTags();
    setResults(topTags);
  }, []);

  const fetchData = (value) => {
    if (value === "") {
      const topTags = getTopTags();
      setResults(topTags);
    } else {
      const results = data.filter((item) =>
        item.tag.toLowerCase().includes(value.toLowerCase())
      );
      setResults(results);
    }
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
            placeholder="Search Most Trending Topics"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
