import { LoaderSpiner } from 'components/common/Loader/Loader';
import MovieInfo from 'components/MovieInfo';
import { useState, useEffect, Suspense } from 'react';
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
    <div>
      <Link to={location}>Back to movies</Link>
      {movieInfo && (
        <div>
          <MovieInfo movie={movieInfo} />
          <p>Addictional information:</p>
          <Link to="credits" state={{ from: location }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
          <Suspense fallback={<LoaderSpiner />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default MovieDetailes;
