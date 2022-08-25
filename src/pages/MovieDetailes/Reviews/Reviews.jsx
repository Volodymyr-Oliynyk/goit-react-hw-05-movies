import ReviewsList from 'components/ReviewsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieReviews from '../../../api/getMovieReviews';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { moviedId } = useParams();

  useEffect(() => {
    getMovieReviews(moviedId).then(result => {
      setReviews(result.data.results);
    });
  });

  return <div>{reviews.length > 0 && <ReviewsList reviews={reviews} />}</div>;
};

export default Reviews;
