import React from "react";
import "./MovieList.css";
import Stars from "./Stars";
import kebabCase from "lodash/kebabCase";

const Movie = props =>
  <li className="Movie">
    <div className="Movie__name">
      {props.name}
    </div>
    <Stars rating={props.rating} name={`${kebabCase(props.name)}-rating`} />
  </li>;

export default ({ movies }) =>
  <ul className="MovieList">
    {movies.map(movie => {
      return <Movie key={movie.id} {...movie} />;
    })}
  </ul>;
