import styles from "../styles/Explore.module.css"

const SearchResult = ({ result }) => {
    return <div className={styles.searchResult}>{result}</div>;
  };

export const SearchResultsList = ({ results }) => {
    return (
      <div className={styles.resultsList}>
        {results.map((result) => (
          <SearchResult result={result.tag} key={result.id} />
        ))}
      </div>
    );
  };