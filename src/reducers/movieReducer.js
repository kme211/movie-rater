import * as types from "../actions/actionTypes";

const initialState = {
  movies: [{
    id: 1,
    name: "Mission Impossible",
    rating: 4
  }, {
    id: 2,
    name: "Stranger Things",
    rating: 5
  }]
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_MOVIE: {
      return [...state, Object.assign({}, action.movie)];
    }
    case types.DELETE_MOVIE: {
      const index = state.findIndex(movie => movie.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case types.RATE_MOVIE: {
      const index = state.findIndex(movie => movie.id === action.id);
      const movie = state[index];
      return [
        ...state.slice(0, index),
        Object.assign({}, movie, { rating: action.rating }),
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}
