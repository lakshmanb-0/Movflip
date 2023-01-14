import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Movietrailer.css";
import { api_key } from "./request";

function Movietrailer({ id, cross, mortv, setCross }) {
  const [single_movie, setsingle_movie] = useState([]);
  const [video, setvideo] = useState(true);
  const [playvideo, setplayvideo] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const movie = await axios.get(
          `/${mortv}/${id}?api_key=${api_key}&language=en-US`
        );
        setsingle_movie(movie.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchDetails();
  }, [id]);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const trailer = await axios.get(
          `/${mortv}/${id}/videos?api_key=${api_key}&language=en-US`
        );
        {
          trailer.data.results.map((ge) => {
            if (ge.type == "Trailer") {
              setvideo(ge);
            }
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchVideo();
  }, [id]);

  const videoLink = `https://www.youtube.com/embed/${video.key}?&autoplay=1`;

  function timeConvert(n) {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  }
  function playVideo() {
    setplayvideo(true);
  }
  function tru(str, n) {
    return `${str}`.length > n ? str.substr(0, n - 1) + " ..." : str;
  }
  return (
    <div className="Movietrailer">
      {cross &&
        (playvideo ? (
          <div className="playvideo">
            <div className="xross">
              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  setplayvideo(false);
                  setCross(false);
                }}
              ></i>
            </div>
            <iframe
              src={videoLink}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
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
            <div className="xross">
              <i
                className="fa-solid fa-xmark"
                onClick={() => {
                  setplayvideo(false);
                  setCross(false);
                }}
              ></i>
            </div>
            <div className="overlay"></div>
            <div className="header_info">
              <div className="header_genre"></div>
              <div className="header_row">
                <i className="fa-solid fa-star "></i>
                <span className="header_rating">
                  {`${single_movie.vote_average}`.slice(0, 3)}
                </span>
                <p className="header_duration">
                  {mortv == "tv" ? (
                    `${single_movie.episode_run_time}m`
                  ) : (
                    <>
                      <span> {timeConvert(single_movie.runtime)}</span>
                    </>
                  )}
                </p>
              </div>
              <h1 className="header_title">{single_movie.title}</h1>
              <p className="header_overview">
                {tru(single_movie.overview, 200)}
              </p>
              <div className="header_btn">
                <button className="header_watch" onClick={playVideo}>
                  <i className="fa-solid fa-play"></i>Watch
                </button>
                <button className="header_list">
                  <i className="fa-solid fa-plus"></i>
                  Add List
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Movietrailer;
