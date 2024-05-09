import axios from '../utils/axios';

export const getAllRequests = axios
	.get('/pickups')
	.then((res) => {
		console.log(res.data);
		return res.data;
	})
	.catch((err) => console.log(err));

export const createRequest = async (data: {}) => {
	axios
		.post('/pickups', data)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((err) => console.log(err));
};

export const getRequestByUser = async (user: number) => {
	console.log(user);
	await axios
		.get(`/pickups/${user}`)
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((err) => console.log(err));
};
