import MovieInfo from 'components/MovieInfo';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import getMovieDetails from '../../api/getMovieDetails';

const MovieDetailes = () => {
  const [movieInfo, setMovieInfo] = useState();
  const { movieId } = useParams();

  const location = useLocation().state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovieInfo(data);
    });
  }, [movieId]);

  return (
    <>
      <Link to={location}>Back </Link>
      <div>
        <MovieInfo movie={movieInfo} />
              <Link to="credits" state={{ from: location }}>
          Cast
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailes;
