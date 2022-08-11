import styles from "./Movie.module.css";
const Movie = (props) => {
  const rating = (Math.random() * 10 + 1).toFixed(2);
  return (
    <div className={styles["frosty-card"]}>
      <div className={styles["card-data"]}>
        <div className={styles["card-header"]}>
          <h1>{props.movie.title}</h1>
          <span className={styles["rating-badge"]}>
            <h4>{rating}</h4>
          </span>
        </div>
        <p>{props.movie.opening_crawl}</p>
      </div>
    </div>
  );
};
export default Movie;
