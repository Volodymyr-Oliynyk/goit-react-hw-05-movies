import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { LoaderSpiner } from 'components/common/Loader/Loader';
import MovieInfo from 'components/MovieInfo';
import getMovieDetails from '../../api/getMovieDetails';
import styled from 'styled-components';

const Cotainer = styled.div`
  padding: 10px 20px;
`
const MovieDetailes = () => {
  const [movieInfo, setMovieInfo] = useState();
  const { movieId } = useParams();

  const location = useLocation().state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId).then(result => {
      setMovieInfo(result);
    });
  }, [movieId]);

  return (
    <Cotainer>
      <Link to={location}> ← Back to movies</Link>
      
      {movieInfo && (
        <>
          <MovieInfo movie={movieInfo} />
          <p>Addictional information:</p>
          <ul>
            <li>
              <Link to="credits" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </li>
          </ul>

          <Suspense fallback={<LoaderSpiner />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </Cotainer>
  );
};

export default MovieDetailes;
