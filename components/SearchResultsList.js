import styles from "../styles/Explore.module.css";

const SearchResult = ({ result }) => {
  return <div className={styles.searchResult}>{result}</div>;
};

export const SearchResultsList = ({ results }) => {
  return (
    <div className={styles.resultsList}>
      {results.map((result) => (
        <SearchResult result={result.tag} key={result.id} /> //maps through the data (from the results prop recieved from explore js component from search bar) and uses search result component to render on DOM.
      ))}
    </div>
  );
};
