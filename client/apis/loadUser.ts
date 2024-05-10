import axios from '../utils/axios';

export const getMyDetails = () =>
	axios
		.get('/auth/me')
		.then((res) => res.data)
		.catch((err) => err.response.data);
