import React from "react";
import Navbar from "../Components/Navbar";
import Row from "../Components/Row";
import requests from "../Components/request";
import "./MoviesPage.css";
import Genres from "../Components/Genres";

function MoviesPage() {
  return (
    <div className="moviePage">
      <Navbar mortv="movie" />
      <Row mortv="movie" Title="Popular" fetchUrl={requests.fetchPopular} />
      <Genres mortv="movie" />
    </div>
  );
}

export default MoviesPage;
