const OMDB_API_KEY = "320f6ab2";

export async function searchMovies(query) {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${encodeURIComponent(
      query
    )}&apikey=${OMDB_API_KEY}`
  );
  const data = await response.json();
  return data.Search || [];
}

export async function getMovieDetails(movieID) {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${movieID}&apikey=${OMDB_API_KEY}`
  );
  const data = await response.json();
  return data;
}
