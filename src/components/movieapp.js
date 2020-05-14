import React from "react";
import "./movieapp.css";
import Moviecard from "./moviecard";
import "./newmoviecard.css";

const Movieapp = ({ movies = [], onAddMovie = () => {} }) => (
  <div className="movie-app container movie-list">
    {movies.map((el) => (
      <Moviecard key={el.id} movie={el} />
    ))}
    <div
      className="new-movie-card"
      onClick={() => {
        onAddMovie({
          id: Math.random(),
          title: prompt("movie title: "),
          rating: Number(prompt("movie rating: ")),
          img: prompt("lien d'image: "),
        });
      }}
    >
      +
    </div>
  </div>
);

export default Movieapp;
