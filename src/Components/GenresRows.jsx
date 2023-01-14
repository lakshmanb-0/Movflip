import React, { useEffect, useState } from "react";
import axios from "./axios";
import Movietrailer from "./Movietrailer";

function GenresRows({ movieData, mortv }) {
  // get movie data according to user clicked in which genre button
  const [moviegenre, setmoviegenre] = useState([]);
  // hide card or movie trailer when clicked
  const [cross, setCross] = useState(false);
  // movieid
  const [movieid, setmovieid] = useState(false);

  useEffect(() => {
    async function fetchmovie() {
      const row = await axios.get(movieData);
      setmoviegenre(row.data.results);
      return moviegenre;
    }
    fetchmovie();
  }, [movieData]);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div className="row_movies">
        {moviegenre.map((movie, index) => (
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
                {`${movie.release_date || movie.first_air_date}`.slice(0, 4)}
              </p>
              <div className="row_rating">
                <i className="fa-solid fa-star "></i>
                <span className="header_rating">
                  {`${movie.vote_average}`.slice(0, 3)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Movietrailer
        id={movieid}
        cross={cross}
        setCross={setCross}
        mortv={mortv}
      />
    </>
  );
}

export default GenresRows;
