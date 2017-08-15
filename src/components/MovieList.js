import React from "react";
import "./MovieList.css";
import { connect } from "react-redux";
import { rateMovie, deleteMovie } from "../actions/movieActions";
import Movie from "./MovieListItem";
import filmReel from "../icons/film.svg";
import popcorn from "../icons/popcorn.svg";

const MovieList = ({ queue, watchedList, rateMovie, deleteMovie }) => {
  return (
    <div className="MovieLists">
      <div>
        <h2>Queue</h2>
        <ul className="MovieList">
          {queue.length === 0 &&
            <li>
              <img className="list-placeholder" src={popcorn} alt="popcorn" />
            </li>}
          {queue.map(movie => {
            return (
              <Movie
                key={movie.id}
                {...movie}
                rateMovie={rateMovie}
                deleteMovie={deleteMovie}
              />
            );
          })}
        </ul>
      </div>

      <div>
        <h2>Watched</h2>

        <ul className="MovieList">
          {watchedList.length === 0 &&
            <li>
              <img
                className="list-placeholder"
                src={filmReel}
                alt="film reel"
              />
            </li>}
          {watchedList.map(movie => {
            return (
              <Movie
                key={movie.id}
                {...movie}
                rateMovie={rateMovie}
                deleteMovie={deleteMovie}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  queue: state.movies.filter(movie => movie.rating === 0),
  watchedList: state.movies.filter(movie => movie.rating > 0)
});

const mapDispatchToProps = { rateMovie, deleteMovie };

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
