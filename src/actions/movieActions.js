import * as types from "./actionTypes";
import * as api from "../api";

export function loadMovies() {
  const movies = api.loadMovies();
  console.log("loadMovies", movies);
  return { type: types.LOAD_MOVIES, movies };
}

export function updateCurrent(value) {
  return { type: types.UPDATE_CURRENT, value };
}

export function addMovie(movie) {
  api.saveMovie(movie);
  return { type: types.ADD_MOVIE, movie };
}

export function deleteMovie(id) {
  api.deleteMovie(id);
  return { type: types.DELETE_MOVIE, id };
}

export function rateMovie(id, rating) {
  api.updateMovie(id, { rating });
  return { type: types.RATE_MOVIE, id, rating };
}
