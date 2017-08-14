import React, { Component } from 'react';
import './App.css';
import * as actions from "./actions/movieActions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
        {this.props.movies.map(movie => {
          return (
            <li key={movie.id}>{movie.name} {movie.rating} stars</li>
          )
        })}
        </ul>
        <form>
          <input type="text" placeholder="Movie name..."/>
          <div className="movie__stars">
            <input type="radio" id="star5" name="rating" />
            <label htmlFor="star5">5 Stars</label>
            <input type="radio" id="star4" name="rating" />
            <label htmlFor="star4">4 Stars</label>
            <input type="radio" id="star3" name="rating" />
            <label htmlFor="star3">3 Stars</label>
            <input type="radio" id="star2" name="rating" />
            <label htmlFor="star2">2 Stars</label>
            <input type="radio" id="star1" name="rating" />
            <label htmlFor="star1">1 Stars</label>
          </div>
          <input type="submit" value="Add movie"/>
        </form>
      </div>
    );
  }
}

export default App;
