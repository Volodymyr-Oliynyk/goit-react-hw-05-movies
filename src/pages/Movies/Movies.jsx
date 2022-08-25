import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import getSearchMovies from '../../api/getSearchMovies';
import { toast } from 'react-toastify';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
 

  useEffect(() => {
    let name = searchParams.get('name') ?? '';
    if (name === '') {
      return;
    }
    getSearchMovies({ query: name}).then(data => {
      setSearchResult(data.results);
    });
  }, [searchParams]);

  const handlSubmit = value => {
    if (value.query.trim() === '') {
      toast('Please, enter a word', {});
      return;
    }
    const params = value.query !== '' ? { name: value.query } : {};
    setSearchParams(params);
  };

  return (
    <>
  
      <SearchForm onSubmit={handlSubmit} value={searchParams.get('name')} />

      <MoviesList movies={searchResult} />
    </>
  );
};

export default Movies;
