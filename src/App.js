import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actions from "./actions/movieActions";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import { updateCurrent, addMovie } from "./actions/movieActions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Add movie</h2>
        <MovieForm
          currentMovie={this.props.currentMovie}
          changeCurrent={this.props.updateCurrent}
          addMovie={this.props.addMovie}
        />
        <h2>Your movies</h2>
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = { updateCurrent, addMovie };

export default connect(mapStateToProps, mapDispatchToProps)(App);
