import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Row from "./Components/Row";
import requests from "./Components/request";
import MoviesList from "./Components/Genres";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import MoviesPage from "./Pages/MoviesPage";
import TVseries from "./Pages/TVseries";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar mortv="/" />
                <Header fetchUrl={requests.fetchTrending} />
                <Row
                  mortv="movie"
                  Title="Popular"
                  fetchUrl={requests.fetchPopular}
                />
                <Row
                  mortv="movie"
                  Title="Trending"
                  fetchUrl={requests.fetchTrending}
                />
                <Row
                  mortv="movie"
                  Title="Top Rated"
                  fetchUrl={requests.fetchTopRated}
                />
                <MoviesList mortv="movie" fetchUrl={requests.fetchAnimation} />
              </>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/Movies" element={<MoviesPage />} />
          <Route path="/Series" element={<TVseries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
