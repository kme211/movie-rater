import * as types from "./actionTypes";

export function updateCurrent(value) {
  return { type: types.UPDATE_CURRENT, value };
}

export function addMovie(movie) {
  return { type: types.ADD_MOVIE, movie };
}

export function deleteMovie(id) {
  return { type: types.DELETE_MOVIE, id };
}

export function rateMovie(id, rating) {
  return { type: types.RATE_MOVIE, id, rating };
}
