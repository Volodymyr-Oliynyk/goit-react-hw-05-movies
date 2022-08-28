import { useState, useEffect } from 'react';
import getTrendingMovies from '../api/getTrendingMovies';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => {
      setTrendingMovies(results);
    });
  }, []);

  return (
    <div>
      <h2>Tranding movies on today</h2>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
