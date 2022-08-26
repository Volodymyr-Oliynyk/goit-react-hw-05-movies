import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import SharedLayout from 'layout/SharedLayout';
import { LoaderSpiner } from 'components/common/Loader/Loader';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetailes = lazy(() => import('pages/MovieDetailes/MovieDetailes'));
const Cast = lazy(() => import('pages/MovieDetailes/Cast/Cast'));
const Reviews = lazy(() => import('pages/MovieDetailes/Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<LoaderSpiner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movies />} />
          <Route path="movie/:movieId" element={<MovieDetailes />}>
            <Route path="credits" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
