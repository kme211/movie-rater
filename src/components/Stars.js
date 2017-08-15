import React from "react";
import "./Stars.css";

export default ({ rating, name, changeCurrent }) =>
  <div className="Stars">
    <input
      style={{ order: 5 }}
      type="radio"
      id={`${name}-star5`}
      name={name}
      value="5"
      defaultChecked={rating === 5}
      checked={rating === 5}
      onChange={changeCurrent}
    />
    <label style={{ order: 5 }} htmlFor={`${name}-star5`}>
      5 Stars
    </label>
    <input
      style={{ order: 4 }}
      type="radio"
      id={`${name}-star4`}
      name={name}
      value="4"
      defaultChecked={rating === 4}
      checked={rating === 4}
      onChange={changeCurrent}
    />
    <label style={{ order: 4 }} htmlFor={`${name}-star4`}>
      4 Stars
    </label>
    <input
      style={{ order: 3 }}
      type="radio"
      id={`${name}-star3`}
      name={name}
      value="3"
      defaultChecked={rating === 3}
      checked={rating === 3}
      onChange={changeCurrent}
    />
    <label style={{ order: 3 }} htmlFor={`${name}-star3`}>
      3 Stars
    </label>
    <input
      style={{ order: 2 }}
      type="radio"
      id={`${name}-star2`}
      name={name}
      value="2"
      checked={rating === 2}
      onChange={changeCurrent}
    />
    <label style={{ order: 2 }} htmlFor={`${name}-star2`}>
      2 Stars
    </label>
    <input
      style={{ order: 1 }}
      type="radio"
      id={`${name}-star1`}
      name={name}
      value="1"
      defaultChecked={rating === 1}
      checked={rating === 1}
      onChange={changeCurrent}
    />
    <label style={{ order: 1 }} htmlFor={`${name}-star1`}>
      1 Star
    </label>
  </div>;
