import React from "react";
import { movies } from "../data";
import MovieList from "./MovieList";
function Movies() {
  // console.log(movies);
  let movieData = movies.map((data, idx) => {
    // console.log(data.title);
    return <MovieList key={idx} title={data.title} time={data.time} genres={data.genres} />;
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {movieData}
    </div>
  );
}

export default Movies;
