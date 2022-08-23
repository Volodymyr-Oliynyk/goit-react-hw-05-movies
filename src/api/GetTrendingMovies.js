import api from './api';
import { toast } from 'react-toastify';

// const trendingParams = {
//   page : 1,
// }

const getTrendingMovies = async () => {
  try {
    const { data } = await api.get(`/trending/movies/day` );
    // , {
    //   params: trendingParams,
    // }
   
    return data;
  } catch (error) {
    toast.error(`Oops, an error occurred! ${error}`);
  }
};

export default getTrendingMovies;

