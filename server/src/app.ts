// import libraries
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import os from 'os';

import connectDB from '@/utils/connectDB';
import upload from './utils/multer';

// dotenv
import { configDotenv } from 'dotenv';
configDotenv();

// import routes
import pickUpRequestRoutes from '@/routes/pickUpRequest';
import authRoutes from '@/routes/auth';
import notificationRoutes from '@/routes/notification';

// import controllers
import globalError from '@/controllers/globalError';
import notFound from '@/controllers/notFound';

// globals
const PORT = process.env.PORT || 8000;

// init express app
const app = express();

// connect to database
const DBUri = process.env.DB || '';
connectDB(DBUri);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: process.env.CLIENT_URL,
	})
);
app.use('/uploads', express.static('uploads'));

if (process.env.ENV === 'development') {
	app.use(morgan('dev'));
}

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/pickups', pickUpRequestRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.post('/api/v1/upload', upload.single('file'), (req, res) => {
	// upload the file
	res.status(200).json({ message: 'file uploaded', file: req.file?.path });
});
app.get('/api/v1/hello', (req, res) => {
	res.status(200).json({ message: 'Hello world' });
});

// not found route
app.use('*', notFound);

// global error handler
app.use(globalError);

// fix ip address
// Get the local IP address dynamically
const ifaces = os.networkInterfaces();
// @ts-ignore
let ipAddress;

Object.keys(ifaces).forEach((ifname) => {
	// @ts-ignore
	ifaces[ifname].forEach((iface: any) => {
		if ('IPv4' !== iface.family || iface.internal !== false) {
			// Skip over internal (i.e. 127.0.0.1) and non-IPv4 addresses
			return;
		}
		ipAddress = iface.address;
	});
});

// @ts-ignore
app.listen(PORT, '0.0.0.0', () => {
	// @ts-ignore
	console.log(`Server is running on  ${ipAddress}:${PORT}`);
});
