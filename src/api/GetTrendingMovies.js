import { axiosApi } from './api';
import { toast } from 'react-toastify';

const getTrendingMovies = async () => {
  try {
    const  {data}  = await axiosApi.get('/trending/movie/day');
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  }
};

export default getTrendingMovies;
