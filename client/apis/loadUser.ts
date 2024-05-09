import axios from '../utils/axios';

export const getMyDetails = () => axios.get('/auth/me');
