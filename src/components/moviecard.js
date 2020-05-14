import React from "react";
import "./rating";
import "./moviecard.css";
import Rating from "./rating";

const Moviecard = (props) => {
  const { movie = {} } = props;
  const {
    title = "",

    img = "https://previews.123rf.com/images/roxanabalint/roxanabalint1810/roxanabalint181000187/110837611-not-available-sign-or-stamp-on-white-background-vector-illustration.jpg",
    rating = 0,
  } = movie;
  return (
    <div className="movie-card">
      <div className="movie-rating">
        <Rating count={rating} />
      </div>
      <div
        className="movie-image"
        style={{
          backgroundImage: `url('${img}')`,
        }}
      />
      <div className="movie-description">{title}</div>
    </div>
  );
};
export default Moviecard;
