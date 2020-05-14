import React, { Component } from "react";
import "./App.css";
import "./components/movieapp";
import Movieapp from "./components/movieapp";
import Namefilter from "./components/namefilter";
import Ratingfilter from "./components/ratingfilter";
import "./components/navbar.css";
import Compte from "./components/compte";

const Shawshank = {
  id: "Shawshank",
  title: "The Shawshank Redemption",
  rating: 7,
  img: "https://images-na.ssl-images-amazon.com/images/I/81yPE07T9wL.jpg",
};
const Godfather = {
  id: "Godfather",
  title: "The Godfather",
  rating: 7,
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71mfJsyJO4L._SY445_.jpg",
};
const DarkKnight = {
  id: "DarkKnight ",
  title: "The Dark Knight ",
  rating: 6,
  img: "https://images-na.ssl-images-amazon.com/images/I/91zBlQ1iqoL._RI_.jpg",
};
const Lordofrings = {
  id: "lordofrings",
  title: "The Lord of the Rings",
  rating: 6,
  img: "https://images-na.ssl-images-amazon.com/images/I/8150KG7y2EL.jpg",
};
const Pulpfiction = {
  id: "Pulpfiction",
  title: "Pulp Fiction",
  rating: 5,
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51mtzSWivtL._SX321_BO1,204,203,200_.jpg",
};
const FightClub = {
  id: "FightClub ",
  title: "Fight Club",
  rating: 5,
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51iOANjtCQL._SY445_.jpg",
};
const ForrestGump = {
  id: "ForrestGump",
  title: "Forrest Gump",
  rating: 4,
  img: "https://images-na.ssl-images-amazon.com/images/I/51n6NXBw9NL._AC_.jpg",
};
const Inception = {
  id: "Inception",
  title: "Inception",
  rating: 4,
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51TfUWh5N9L._SY445_.jpg",
};
const Matrix = {
  id: "Matrix",
  title: "The Matrix",
  rating: 3,
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
};
const Seven = {
  id: "Seven",
  title: "Se7en",
  rating: 3,
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51VQ890AJML._SY445_.jpg",
};

const MovieList = [
  Shawshank,
  Godfather,
  DarkKnight,
  Lordofrings,
  Pulpfiction,
  FightClub,
  ForrestGump,
  Inception,
  Matrix,
  Seven,
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minRatingFilter: 1,
      movies: MovieList,
      titleFilter: "",
    };
  }
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie),
    });
  }
  getVisibleMovies() {
    return this.state.movies.filter(
      (el) =>
        el.rating >= this.state.minRatingFilter &&
        el.title
          .toLowerCase()
          .includes(this.state.titleFilter.toLowerCase().trim())
    );
  }
  render() {
    return (
      <div>
        <div className="container">
          <Compte />
        </div>
        <div className="movieapp container">
          <Ratingfilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating,
              });
            }}
          />
          <Namefilter
            value={this.state.titleFilter}
            onChange={(newTitleFilter) => {
              this.setState({
                titleFilter: newTitleFilter,
              });
            }}
          />
        </div>
        <Movieapp
          movies={this.getVisibleMovies()}
          onAddMovie={(newMovie) => this.addNewMovie(newMovie)}
        />
      </div>
    );
  }
}

export default App;
