import axios from '../utils/axios';

export const signin = async (phone: number, password: string) => {
	const res = await axios.post('/auth/signin', {
		phone,
		password,
	});
	return res.data;
};
