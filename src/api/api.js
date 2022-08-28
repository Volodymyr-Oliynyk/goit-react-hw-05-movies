import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/ApiConst';

export const axiosApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
