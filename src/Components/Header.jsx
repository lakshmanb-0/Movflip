import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Header.css";
import { api_key } from "./request";

function Header({ fetchUrl }) {
  const [single_movie, setsingle_movie] = useState([]);
  const [Details, setDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const row = await axios.get(fetchUrl);
      setsingle_movie(row.data.results[Math.floor(Math.random() * 20)]);
      return single_movie;
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const movie = await axios.get(
          `/movie/${single_movie.id}?api_key=${api_key}&language=en-US`
        );
        setDetails(movie.data.runtime);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchDetails();
  }, [single_movie]);

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  }

  function tru(str, n) {
    return `${str}`.length > n ? str.substr(0, n - 1) + " ..." : str;
  }

  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original${single_movie.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="overlay"></div>
      <div className="header_info">
        <div className="header_genre"></div>

        <div className="header_row">
          <i className="fa-solid fa-star "></i>
          <span className="header_rating">
            {`${single_movie.vote_average}`.slice(0, 3)}
          </span>
          <p className="header_duration">
            <span> {timeConvert(Details)}</span>
          </p>
        </div>
        <h1 className="header_title">{single_movie.title}</h1>
        <p className="header_overview">{tru(single_movie.overview, 250)}</p>
        <div className="header_btn">
          <button className="header_watch">
            <i className="fa-solid fa-play"></i>Watch
          </button>
          <button className="header_list">
            <i className="fa-solid fa-plus"></i>Add List
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
