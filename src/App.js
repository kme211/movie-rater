import React, { Component } from "react";
import "./App.css";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Add movie</h2>
        <MovieForm />
        <MovieList />
      </div>
    );
  }
}
