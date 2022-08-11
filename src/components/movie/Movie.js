import styles from "./Movie.module.css";
import Button from "../../shared/Button";
import Modal from "../../shared/Modal";
import { Fragment, useState } from "react";
const Movie = (props) => {
  const [showModal, setShowModal] = useState(false);

  const rating = (Math.random() * 5 + 5).toFixed(1);

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const watchNowHandler = () => {
    setShowModal(true);
    console.log("Watching Now: " + props.movie.title);
  };

  return (
    <Fragment>
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
      {showModal && (
        <Modal onHideModal={hideModalHandler}>
          <h2>You are now watching Star Wars: {props.movie.title}</h2>
        </Modal>
      )}
    </Fragment>
  );
};
export default Movie;
