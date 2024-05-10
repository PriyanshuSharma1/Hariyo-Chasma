import axios from '../utils/axios';

export const getNotifications = () => {
	return axios
		.get('/notifications')
		.then((res) => res.data)
		.catch((err) => err);
};

export const getNotificationByAddress = (address: string) => {
	return axios
		.get(`/notifications/${address}`)
		.then((res) => res.data)
		.catch((err) => err);
};
