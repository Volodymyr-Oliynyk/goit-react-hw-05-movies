import { axiosApi } from './api';
import { toast } from 'react-toastify';

const getSearchMovies = async query => {
  try {
    const { data } = await axiosApi.get('/search/movie', { params: query });
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  }
};

export default getSearchMovies;
