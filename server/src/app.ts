// import libraries
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import connectDB from '@/utils/connectDB';

// dotenv
import { configDotenv } from 'dotenv';
configDotenv();

// import routes
import pickUpRequestRoutes from '@/routes/pickUpRequest';
import authRoutes from '@/routes/auth';

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

if (process.env.ENV === 'development') {
	app.use(morgan('dev'));
}

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/pickups', pickUpRequestRoutes);

// not found route
app.use('*', notFound);

// global error handler
app.use(globalError);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
