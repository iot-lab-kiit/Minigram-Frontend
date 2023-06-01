import styles from "../styles/Explore.module.css";

const SearchResult = ({ result }) => {
  return (
    <div className={styles.searchResult}>
      {result.tag}
      <div className={styles.popularity}>{result.popularity} tweets</div>
    </div>
  );
};

export const SearchResultsList = ({ results }) => {
  return (
    <div className={styles.resultsList}>
      <h2 className={styles.trendingNow}>TRENDING NOW</h2>
      {results.map((result) => (
        <SearchResult result={result} key={result.id} /> //maps through the data (from the results prop recieved from explore js component from search bar) and uses search result component to render on DOM.
      ))}
    </div>
  );
};
