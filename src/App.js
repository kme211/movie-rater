import React, { Component } from "react";
import "./App.css";
import * as actions from "./actions/movieActions";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Add movie</h2>
        <MovieForm
          currentMovie={this.props.currentMovie}
          changeCurrent={this.props.changeCurrent}
          addMovie={this.props.addMovie}
        />
        <h2>Your movies</h2>
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

export default App;
