const Genres = ({ movieGenres }) => {
  return (
    <ul>
      {movieGenres.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};

export default Genres;
