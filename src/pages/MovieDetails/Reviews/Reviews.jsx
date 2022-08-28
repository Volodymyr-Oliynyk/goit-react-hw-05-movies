// import ReviewsList from 'components/ReviewsList';
import ReviewsList from 'components/ReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieReviews from '../../../api/getMovieReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(({data}) => {
      setReviews(data.results);
    });
  }, [movieId]);

  return <>{reviews && <ReviewsList reviews={reviews} />}</>;
};

export default Reviews;
