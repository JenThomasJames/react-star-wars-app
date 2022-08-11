import { Fragment, useState } from "react";
import "./App.css";
import Movies from "./components/movies/Movies";
import Button from "./shared/Button";
import Card from "./shared/Card";
import Spinner from "./shared/Spinner";

function App() {
  const [data, setData] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const fetchMoviesHandler = async () => {
    setShowSpinner(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        setShowSpinner(false);
        throw new Error("Something went wrong :(");
      }
      setData(await response.json());
    } catch (error) {
      console.log(error.message);
    }
    setShowSpinner(false);
  };

  return (
    <div className="root-style">
      {Object.keys(data).length === 0 && (
        <Fragment>
          <Card>
            <Button
              btnText="Fetch Movies"
              clickHandler={fetchMoviesHandler}
            ></Button>
          </Card>
        </Fragment>
      )}
      {Object.keys(data).length !== 0 && <Movies movieData={data.results} />}
      {showSpinner && (
        <div className="center-all">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default App;
