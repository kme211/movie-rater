import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";
import { updateCurrent, addMovie } from "./actions/movieActions";

const movieChangeHandler = e => {
  let { name, value } = e.target;
  if (name === "rating") value = +value;
  store.dispatch(updateCurrent({ [name]: value }));
};

const addMovieHandler = e => {
  e.preventDefault();
  const { currentMovie } = store.getState();
  store.dispatch(addMovie(currentMovie));
};

const render = () => {
  const state = store.getState();
  ReactDOM.render(
    <App
      {...state}
      changeCurrent={movieChangeHandler}
      addMovie={addMovieHandler}
    />,
    document.getElementById("root")
  );
};

render();
store.subscribe(render);

setTimeout(() => {
  store.dispatch({
    type: "ADD_MOVIE",
    movie: {
      id: 5,
      name: "Midnight Meat Train",
      rating: 4
    }
  });
}, 1000);

registerServiceWorker();
