import React from "react";
import { Link, Route } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <Link to={`/Movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}
    <Link className="home-button" to="/">
      Home
    </Link>
  </div>
);

export default SavedList;
