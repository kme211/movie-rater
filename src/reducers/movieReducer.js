import * as types from "../actions/actionTypes";
import cuid from "cuid";

const initialState = {
  movies: [
    {
      id: 1,
      name: "Mission Impossible",
      rating: 4
    },
    {
      id: 2,
      name: "Stranger Things",
      rating: 5
    }
  ],
  currentMovie: { id: cuid(), name: "", rating: null }
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_CURRENT: {
      return {
        ...state,
        currentMovie: Object.assign({}, state.currentMovie, action.value)
      };
    }
    case types.ADD_MOVIE: {
      return {
        ...state,
        movies: [...state.movies, Object.assign({}, action.movie)],
        currentMovie: {
          id: cuid(),
          name: "",
          rating: null
        }
      };
    }
    case types.DELETE_MOVIE: {
      const index = state.findIndex(movie => movie.id === action.id);
      return {
        ...state,
        movies: [
          ...state.movies.slice(0, index),
          ...state.movies.slice(index + 1)
        ]
      };
    }
    case types.RATE_MOVIE: {
      const index = state.movies.findIndex(movie => movie.id === action.id);
      const movie = state.movies[index];
      return {
        ...state,
        movies: [
          ...state.movies.slice(0, index),
          Object.assign({}, movie, { rating: action.rating }),
          ...state.slice(index + 1)
        ]
      };
    }
    default:
      return state;
  }
}
