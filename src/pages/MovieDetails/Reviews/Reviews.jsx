// import ReviewsList from 'components/ReviewsList';
import ReviewsList from 'components/ReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieReviews from '../../../api/getMovieReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { moviedId } = useParams();

  useEffect(() => {
    getMovieReviews(moviedId).then(data => {
      setReviews(data.results);
    });
  });

  return <>{reviews && <ReviewsList reviews={reviews} />}</>;
};

export default Reviews;
