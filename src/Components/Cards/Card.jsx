import React from "react";
import "./Card.css";
import MovieList from "../MovieList/MovieList";
import MovieWatched from "../MovieWatched/MovieWatched";

const Card = ({
 
}) => {
  return (
    <div className="moviedetails">
      <MovieList />
      <MovieWatched />
    </div>
  );
};

export default Card;
