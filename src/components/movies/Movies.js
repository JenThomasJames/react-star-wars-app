import Movie from "../movie/Movie";
import styles from "./Movies.module.css";
const Movies = (props) => {
  return (
    <div className={styles["movies-container"]}>
      {props.movieData.map((movie) => (
        <Movie movie={movie} key={movie.episode_id} />
      ))}
    </div>
  );
};
export default Movies;
