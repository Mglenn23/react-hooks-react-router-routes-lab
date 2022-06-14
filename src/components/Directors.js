import React from "react";
import { directors } from "../data";
import DirectorsList from "./DirectorsList";
function Directors() {
  // console.log(directors);
  const dataDirectors = directors.map((data, idx) => {
    return <DirectorsList key={idx} name={data.name} movies={data.movies} />;
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {dataDirectors}
    </div>
  );
}

export default Directors;
