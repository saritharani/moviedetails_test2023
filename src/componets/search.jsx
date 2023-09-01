import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchMovies } from "../api";
// import api from "../api";

function Search({ onSelectMovie }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (query.trim() === "") return;

    const searchResults = await searchMovies(query);
    setMovies(searchResults);
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="search for a movie"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
          <ul className="list-group">
            {movies.map(movie => (
              <li className="list-group-item" key={movie.imdbID}>
                <Link to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
                {/* <button onClick={() => onSelectMovie(movie)}>{movie.Title}</button> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <MovieList movies={movies} /> */}
    </div>
  );
}

export default Search;
