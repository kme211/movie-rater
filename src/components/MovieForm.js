import React, { Component } from "react";
import Stars from "./Stars";
import "./MovieForm.css";

export default ({ currentMovie, changeCurrent, addMovie }) => {
  const movieChangeHandler = e => {
    let { name, value } = e.target;
    if (name === "rating") value = +value;
    changeCurrent({ [name]: value });
  };

  const addMovieHandler = e => {
    e.preventDefault();
    addMovie(currentMovie);
  };

  return (
    <form className="MovieForm">
      <input
        type="text"
        name="name"
        placeholder="Movie name..."
        value={currentMovie.name}
        onChange={movieChangeHandler}
      />
      <Stars
        name="rating"
        changeCurrent={movieChangeHandler}
        rating={currentMovie.rating}
      />
      <input type="submit" value="Add movie" onClick={addMovieHandler} />
    </form>
  );
};
