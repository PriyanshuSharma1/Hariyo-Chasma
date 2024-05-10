import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ip from '../utils/ip';

const axiosInstance = axios.create({
	baseURL: `${ip}/api/v1`,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

axiosInstance.interceptors.request.use(async (config) => {
	let token = await AsyncStorage.getItem('token');
	if (token) {
		console.log(token);
		config.headers.Authorization = `Bearer ${token.replace(/"/g, '')}`;
	}
	return config;
});

export default axiosInstance;
