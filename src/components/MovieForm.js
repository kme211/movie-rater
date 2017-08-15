import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/movieActions";
import Stars from "./Stars";
import cuid from "cuid";
import "./MovieForm.css";

class MovieForm extends Component {
  movieChangeHandler = e => {
    let { name, value } = e.target;
    if (name === "rating") value = +value;
    this.props.actions.updateCurrent({ [name]: value });
  };
  addMovieHandler = e => {
    e.preventDefault();
    this.props.actions.addMovie(
      Object.assign({}, this.props.currentMovie, { id: cuid() })
    );
  };
  render() {
    const { currentMovie } = this.props;
    return (
      <form className="MovieForm">
        <input
          type="text"
          name="name"
          placeholder="Movie name..."
          autoComplete="off"
          value={currentMovie.name}
          onChange={this.movieChangeHandler}
        />
        <Stars
          name="rating"
          onChange={this.movieChangeHandler}
          rating={currentMovie.rating}
        />
        <input
          style={{
            visibility: currentMovie.name.length > 0 ? "visible" : "hidden",
            opacity: currentMovie.name.length > 0 ? 1 : 0
          }}
          type="submit"
          value={
            currentMovie.rating !== null
              ? "Add to watched list"
              : "Add to queue"
          }
          onClick={this.addMovieHandler}
        />

      </form>
    );
  }
}

const mapStateToProps = state => ({ currentMovie: state.currentMovie });
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);
