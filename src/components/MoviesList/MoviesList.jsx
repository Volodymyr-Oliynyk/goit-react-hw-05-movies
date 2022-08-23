import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`} state={{ from: location }}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
                    : 'https://dummyimage.com/309x449/fff/000000.png&text=%D0%9A%D1%96%D0%BD%D0%B0+%D0%BD%D0%B5+%D0%B1%D1%83%D0%B4%D0%B5!'
                }
                alt={movie.title}
              />
            </Link>
            <p>{movie.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
