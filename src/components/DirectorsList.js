function DirectorsList({ name, movies }) {
  const datMovie = movies.map((data, idx) => {
    return <li key={idx}>{data}</li>;
  });
  return (
    <div>
      <h2>Name: {name}</h2>
      <h4>Movies:</h4>
      <ul>{datMovie}</ul>
    </div>
  );
}
export default DirectorsList;
