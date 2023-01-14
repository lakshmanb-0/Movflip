import React, { useState, useEffect } from "react";
import axios from "./axios";
import Movietrailer from "./Movietrailer";
import "./row.css";

function Row({ Title, fetchUrl, mortv }) {
  const [movie, setmovie] = useState([]);
  const [movieid, setmovieid] = useState([]);
  const [cross, setCross] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const row = await axios.get(fetchUrl);
      setmovie(row.data.results);
      return movie;
    }
    fetchData();
  }, [movie]);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="row">
      <h1 className="row_maintitle">{Title}</h1>
      <div className="row_line"></div>

      <div className="row_movies">
        {movie.map((movie, index) => {
          return (
            movie.poster_path !== null && (
              <div className="row_movie" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.name}
                  onClick={() => {
                    setmovieid(movie.id);
                    setCross(true);
                  }}
                />
                <h3 className="row_title" title={movie.title || movie.name}>
                  {truncate(movie.title || movie.name, 25)}
                </h3>

                <div className="row_details">
                  <p className="row_releaseDate">
                    {`${movie.release_date || movie.first_air_date}`.slice(
                      0,
                      4
                    )}
                  </p>
                  <div className="row_rating">
                    <i className="fa-solid fa-star "></i>
                    <span className="header_rating">
                      {`${movie.vote_average}`.slice(0, 3)}
                    </span>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <Movietrailer
        id={movieid}
        cross={cross}
        setCross={setCross}
        mortv={mortv}
      />
    </div>
  );
}

export default Row;
