import axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/ApiConst';

const api = axios.create({
  baseURL: BASE_URL,
  pararms: {
    api_key: API_KEY,
  },
});

export default api;
