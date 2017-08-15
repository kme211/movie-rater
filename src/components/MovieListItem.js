import React, { Component } from "react";
import PropTypes from "prop-types";
import Stars from "./Stars";
import kebabCase from "lodash/kebabCase";
import "./MovieListItem.css";
import svg from "../icons/trash.svg";

class MovieListItem extends Component {
  static propTypes = {
    rateMovie: PropTypes.func.isRequired,
    deleteMovie: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  };
  rateMovie = e => {
    this.props.rateMovie(this.props.id, +e.target.value);
  };
  deleteMovie = e => {
    this.props.deleteMovie(this.props.id);
  };
  render() {
    const { name, rating } = this.props;
    return (
      <li className="Movie">
        <div className="Movie__name">
          {name}
        </div>
        <Stars
          rating={rating}
          name={`${kebabCase(name)}-rating`}
          onChange={this.rateMovie}
        />
        <button className="Movie__delete-btn" onClick={this.deleteMovie}>
          <img src={svg} alt="trash" />
        </button>
      </li>
    );
  }
}

export default MovieListItem;
