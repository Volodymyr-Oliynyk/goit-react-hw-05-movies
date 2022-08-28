import { axiosApi } from './api';
import { toast } from 'react-toastify';

const getMovieReviews = async id => {
  try {
    const { data } = await axiosApi.get(`/movie/${id}/reviews`);
    return data.results;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  }
};

export default getMovieReviews;
