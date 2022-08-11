import styles from "./Movie.module.css";
import Button from "../../shared/Button";
const Movie = (props) => {
  const rating = (Math.random() * 5 + 5).toFixed(1);

  const watchNowHandler = () => {
    console.log("Watching Now: " + props.movie.title);
  };

  return (
    <div className={styles["frosty-card"]}>
      <div className={styles["card-data"]}>
        <div className={styles["card-header"]}>
          <h1>{props.movie.title}</h1>
          <span className={styles["rating-badge"]}>
            <h4>{rating}</h4>
          </span>
        </div>
        <div className={styles["card-footer"]}>
          <Button btnText="Watch Now" clickHandler={watchNowHandler} />
        </div>
        <p>{props.movie.opening_crawl}</p>
      </div>
    </div>
  );
};
export default Movie;
