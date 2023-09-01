import React, { useState, useEffect } from "react";
import { getMovieDetails } from "../api";
import { useParams, useNavigate } from "react-router-dom";
// import "../styles.css";

function MovieDetail() {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();

  //   const [movie, setMovie] = useState(null);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieID);
        console.log("movie details", details);
        setMovieDetails(details);
      } catch (error) {
        console.log("error in fetching movie details", error);
      }
    };
    fetchMovieDetails();
  }, [movieID]);
  //   if (!movie) {
  //     return null;
  //   }
  console.log("moviedetails in usestate", movieDetails);

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-danger">
            Title: {movieDetails.Title}
          </h2>
          <p className="card-text">Year: {movieDetails.Year}</p>
          <p className="card-text">Plot: {movieDetails.Plot}</p>
          <p className="card-text">Cast: {movieDetails.Actors}</p>
          <button className="btn btn-primary" onClick={handleGoBack}>
            Done
          </button>
        </div>
        {/* <Link to="/">Go Back to Search</Link> */}
      </div>
    </div>
  );
}

export default MovieDetail;
