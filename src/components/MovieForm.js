import React, { Component } from "react";
import Stars from "./Stars";
import "./MovieForm.css";

export default ({ currentMovie, changeCurrent, addMovie }) =>
  <form className="MovieForm">
    <input
      type="text"
      name="name"
      placeholder="Movie name..."
      value={currentMovie.name}
      onChange={changeCurrent}
    />
    <Stars
      name="rating"
      changeCurrent={changeCurrent}
      rating={currentMovie.rating}
    />
    <input type="submit" value="Add movie" onClick={addMovie} />
  </form>;
