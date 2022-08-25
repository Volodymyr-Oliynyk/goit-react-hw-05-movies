import { axiosApi } from './api';
import { toast } from 'react-toastify';

const getMovieReviews = async id => {
  try {
    const response  = await axiosApi.get(`/movie/${id}/reviews`);
    return response ;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  }
};

export default getMovieReviews;
