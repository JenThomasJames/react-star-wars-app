import { Fragment, useState } from "react";
import "./App.css";
import Movies from "./components/movies/Movies";
import Button from "./shared/Button";
import Card from "./shared/Card";

function App() {
  const [data, setData] = useState({});
  const fetchMoviesHandler = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong :(");
      }
      setData(await response.json());
    } catch (error) {
      console.log(error.message);
    }
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
    </div>
  );
}

export default App;
