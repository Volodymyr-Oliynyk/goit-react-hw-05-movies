import { useState, useEffect } from 'react';
import getTrendingMovies from 'api/GetTrendingMovies';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(( result ) => {
      const {results} = result;
      setTrendingMovies(results);
      console.log(results);
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
