import React from "react";
import Navbar from "../Components/Navbar";
import Row from "../Components/Row";
import requests from "../Components/request";
import "./MoviesPage.css";
import Genres from "../Components/Genres";

function TVseries() {
  return (
    <div className="moviePage">
      <Navbar mortv="tv" />
      <Row mortv="tv" Title="Popular" fetchUrl={requests.fetchPopularTv} />
      <Genres mortv="tv" />
    </div>
  );
}

export default TVseries;
