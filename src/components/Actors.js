import React from "react";
import { actors } from "../data";

function Actors() {
  // console.log(actors);
  const datActor = actors.map((data, idx) => {
    return (
      <div key={idx}>
        <h2>Name: {data.name}</h2>
        <h4>Movies:</h4>
        <ul>
          {data.movies.map((mov, idx) => {
            return <li key={idx}>{mov}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {datActor}
    </div>
  );
}

export default Actors;
