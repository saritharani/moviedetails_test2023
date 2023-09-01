import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MovieDetails from "./movieDetails";

describe("MovieDetails Component", () => {
  it("renders without crashing", () => {
    render(<MovieDetails />);
  });

  it("displays movie details correctly", () => {
    const testMovieDetails = {
      Title: "Guardians of the Galaxy Vol. 2",
      Year: "2017",
      Plot:
        "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
      Actors: "Chris Pratt, Zoe Saldana, Dave Bautista"
    };
    const { getByText } = render(
      <MovieDetails movieDetails={testMovieDetails} />
    );
    expect(
      getByText("Title: Guardians of the Galaxy Vol. 2")
    ).toBeInTheDocument();
    expect(getByText("Year: 2017")).toBeInTheDocument();
  });
});
