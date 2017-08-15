import React from "react";
import "./MovieList.css";
import { connect } from "react-redux";
import { rateMovie, deleteMovie } from "../actions/movieActions";
import Movie from "./MovieListItem";

const MovieList = ({ queue, watchedList, rateMovie, deleteMovie }) => {
  return (
    <div className="MovieLists">
      <div>
        <h2>Queue</h2>
        <ul className="MovieList">
          {queue.map(movie => {
            return <Movie key={movie.id} {...movie} rateMovie={rateMovie} />;
          })}
        </ul>
      </div>

      <div>
        <h2>Watched</h2>
        <ul className="MovieList">
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
