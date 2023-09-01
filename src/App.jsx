import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./componets/search";
import MovieDetails from "./componets/movieDetails";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center text-success mb-4">Movie App</h1>
        <Routes>
          <Route path="/" element={<Search></Search>} />
          <Route
            path="/movies/:movieID"
            element={<MovieDetails></MovieDetails>}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
