import reducer from "./movieReducer";
import * as types from "../actions/actionTypes";

describe("movie reducer", () => {
  test("returns a state object", () => {
    const result = reducer(undefined, { type: "ANYTHING" });
    expect(result).toBeDefined();
  });

  test("adds a movie", () => {
    const startState = {
      movies: [
        { id: 1, name: "Jurassic Park", rating: 5 },
        { id: 2, name: "Finding Nemo", rating: 4 }
      ]
    };

    const expectedState = {
      movies: [
        { id: 1, name: "Jurassic Park", rating: 5 },
        { id: 2, name: "Finding Nemo", rating: 4 },
        { id: 3, name: "Donnie Darko", rating: 4 }
      ]
    };

    const result = reducer(startState, {
      type: types.ADD_MOVIE,
      movie: { id: 3, name: "Donnie Darko", rating: 4 }
    });

    expect(result).toEqual(expectedState);
  });

  // test("removes a movie", () => {

  // })
});
