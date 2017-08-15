import * as types from "../actions/actionTypes";

const initialState = {
  movies: [],
  currentMovie: { id: "", name: "", rating: 0 }
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_MOVIES: {
      return {
        ...state,
        movies: [...state.movies, ...action.movies]
      };
    }
    case types.UPDATE_CURRENT: {
      return {
        ...state,
        currentMovie: Object.assign({}, state.currentMovie, action.value)
      };
    }
    case types.ADD_MOVIE: {
      return {
        ...state,
        movies: [Object.assign({}, action.movie), ...state.movies],
        currentMovie: {
          id: "",
          name: "",
          rating: 0
        }
      };
    }
    case types.DELETE_MOVIE: {
      const index = state.movies.findIndex(movie => movie.id === action.id);
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
          ...state.movies.slice(index + 1)
        ]
      };
    }
    default:
      return state;
  }
}
