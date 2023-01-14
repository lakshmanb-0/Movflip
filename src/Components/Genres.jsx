import React, { useState } from "react";
import GenresRows from "./GenresRows";
import "./row.css";
import { api_key } from "./request";

function Genres({ mortv }) {
  // select moviegenre or tvgenre
  const [moviegenre, setMoviegenre] = useState([]);
  // change back color when button is clicked
  const [backColor, setbackColor] = useState("");

  const movieGenres = [
    {
      id: 28,
      name: "Action",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=28`,
    },
    {
      id: 12,
      name: "Adventure",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=12`,
    },
    {
      id: 16,
      name: "Animation",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=16`,
    },
    {
      id: 35,
      name: "Comedy",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=35`,
    },
    {
      id: 80,
      name: "Crime",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=80`,
    },
    {
      id: 10751,
      name: "Family",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=10751`,
    },
    {
      id: 14,
      name: "Fantasy",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=14`,
    },
    {
      id: 36,
      name: "History",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=36`,
    },
    {
      id: 27,
      name: "Horror",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=27`,
    },
    {
      id: 10402,
      name: "Music",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=10402`,
    },
    {
      id: 9648,
      name: "Mystery",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=9648`,
    },
    {
      id: 10749,
      name: "Romance",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=10749`,
    },
    {
      id: 878,
      name: "Science Fiction",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=878`,
    },
    {
      id: 10770,
      name: "TV Movie",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=10770`,
    },
    {
      id: 53,
      name: "Thriller",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=53`,
    },
    {
      id: 10752,
      name: "War",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=10752`,
    },
    {
      id: 37,
      name: "Western",
      mov: `/movie/popular?api_key=${api_key}&language=en-US&with_genres=37`,
    },
  ];
  const tvGenres = [
    {
      id: 10759,
      name: "Action & Adventure",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=10759`,
    },
    {
      id: 16,
      name: "Animation",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=16`,
    },
    {
      id: 35,
      name: "Comedy",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=35`,
    },
    {
      id: 80,
      name: "Crime",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=80`,
    },
    {
      id: 99,
      name: "Documentary",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=99`,
    },
    {
      id: 18,
      name: "Drama",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=18`,
    },

    {
      id: 10751,
      name: "Family",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=10751`,
    },
    {
      id: 10762,
      name: "Kids",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=10762`,
    },
    {
      id: 9648,
      name: "Mystery",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=9648`,
    },
    {
      id: 10764,
      name: "Reality",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=10764`,
    },
    {
      id: 10766,
      name: "Sci-Fi & Fantasy",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=10766`,
    },
    {
      id: 37,
      name: "Western",
      mov: `/tv/popular?api_key=${api_key}&language=en-US&with_genres=37`,
    },
  ];
  function handleClick(e) {
    setMoviegenre(e);
  }

  return (
    <div className="row">
      <h1 className="row_maintitle">Genres</h1>
      <div className="row_line"></div>
      <div className="row_genres">
        {mortv == "movie"
          ? movieGenres.map((ge) => (
              <button
                className={ge.name == backColor && "clicked"}
                onClick={(e) => {
                  handleClick(ge.mov);
                  setbackColor(ge.name);
                }}
                key={ge.id}
              >
                {ge.name}
              </button>
            ))
          : tvGenres.map((ge) => (
              <button
                className={ge.name == backColor && "clicked"}
                onClick={(e) => {
                  handleClick(ge.mov);
                  setbackColor(ge.name);
                }}
                key={ge.id}
              >
                {ge.name}
              </button>
            ))}
      </div>
      <GenresRows movieData={moviegenre} mortv={mortv} />
    </div>
  );
}
// movielist
export default Genres;
