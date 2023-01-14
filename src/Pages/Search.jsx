import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { api_key } from "../Components/request";
import Row from "../Components/Row";
import "./Search.css";

function Search() {
  const [search, setsearch] = useState("");
  const [catg, setcatg] = useState("Movie");

  return (
    <div className="search">
      <Navbar />
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div className="row_genres">
          <button
            className={catg == "Movie" && "clicked"}
            onClick={(e) => setcatg(e.target.innerText)}
          >
            Movie
          </button>
          <button
            className={catg == "Tv" && "clicked"}
            onClick={(e) => setcatg(e.target.innerText)}
          >
            Tv
          </button>
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>
      </form>
      <div className="search_row">
        {search && (
          <Row
            mortv={catg.toLowerCase()}
            fetchUrl={`/search/${catg.toLowerCase()}?api_key=${api_key}&language=en-US&query=${search}&page=1&include_adult=false`}
          />
        )}
      </div>
    </div>
  );
}

export default Search;
