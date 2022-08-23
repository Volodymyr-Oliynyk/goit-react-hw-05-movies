import {useState, useEffect} from 'react';
import getTrendingMovies from 'api/GetTrendingMovies';
import MoviesList from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect (()=>{
    getTrendingMovies().then(data=> {
      setTrendingMovies(data.results)
    });
  }, [])
  return (
    <>
    <h2>Tranding movies on today</h2>
    <MoviesList movies={trendingMovies}/>

    </>
    
  );
};
