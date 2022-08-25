import { axiosApi } from './api';
import { toast } from 'react-toastify';

const getMovieDetails = async id => {
  try {
    const { data } = await axiosApi.get(`movie/${id}`);
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  }
};

export default getMovieDetails;
