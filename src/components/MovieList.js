function MovieList({ title, time, genres }) {
  //   console.log(title);

  const genreData = genres.map((gen, idx) => {
    return <li key={idx}>{gen}</li>;
  });
  return (
    <div>
      <h2>Name: {title}</h2>
      <h4>Time: {time}</h4>
      Genres:
      <ul>{genreData}</ul>
    </div>
  );
}
export default MovieList;
