import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastList from 'components/CastList';
import getMovieCredits from '../../../api/getMovieCredits';

const Cast = () => {
  const [credits, setCredits] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(data => {
      setCredits(data.cast);
    });
  }, [movieId]);
  return <>{credits && <CastList credits={credits} />}</>;
};

export default Cast;
