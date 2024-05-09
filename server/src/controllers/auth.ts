import { NextFunction, Request, Response } from 'express'; // Import the Request type from 'express'
import catchAsync from '@/utils/catchAsync';
import User from '@/models/entity/User';
import AppError from '@/utils/AppError';
import { IUserRequest } from '@/interfaces/Request';
import { IUser } from '@/interfaces/User';
import { expressjwt } from 'express-jwt';

import { configDotenv } from 'dotenv';
configDotenv();

// sign up a user
export const signUp = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const {
			firstname,
			lastname,
			phone,
			photo,
			address,
			houseNumber,
			community,
			password,
		} = req.body as IUser;

		// check if username already exists
		const userExists = await User.findOne({ phone: phone });

		// check if the username is taken
		if (userExists) {
			return next(AppError.badRequest('User already exists'));
		}

		// create user
		const newUser = await User.create({
			firstname,
			lastname,
			phone,
			photo,
			address,
			houseNumber,
			community,
			password,
		});

		// generate jwt token
		const token = await newUser.generateJwtToken();

		// send the response
		return res.status(201).json({
			status: 'success',
			message: 'User created successfully',
			data: {
				user: newUser,
				token,
			},
		});
	}
);

// signin user
export const signIn = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const { phone, password } = req.body;

		//  check username and email
		const userExists = await User.findOne({
			phone: phone,
		}).select('+password');

		if (!userExists) {
			return next(AppError.badRequest('User does not exist'));
		}

		const isCorrectPassword = await userExists.comparePassword(
			password,
			userExists.password
		);
		// generate jwt token
		const token = await userExists.generateJwtToken();
		if (isCorrectPassword) {
			return res.status(200).json({
				status: 'success',
				message: 'User signed in successfully',
				data: {
					user: userExists,
					token,
				},
			});
		} else {
			return next(AppError.badRequest('Incorrect password'));
		}
	}
);

export const currentUser = catchAsync(
	async (req: IUserRequest, res: Response, next: NextFunction) => {
		const user = await User.findById(req.auth.id);
		if (!user) {
			return next(AppError.notFound('User not found'));
		}
		return res.status(200).json({
			status: 'success',
			data: {
				user,
			},
		});
	}
);

// check if the user is logged in using expressJWT and send the user in req.user
export const isLoggedIn = expressjwt({
	secret: process.env.JWT_SECRET as string,
	algorithms: ['HS256'],
	getToken: function (req: Request) {
		if (
			req.headers.authorization &&
			req.headers.authorization.startsWith('Bearer')
		) {
			return req.headers.authorization.split(' ')[1];
		}
		return undefined;
	},
});

// only proceed if user is community
export const isCommunity = catchAsync(
	async (req: IUserRequest, res: Response, next: NextFunction) => {
		const user = await User.findById(req.auth.id);
		console.log(user);
		if (!user) {
			return next(AppError.notFound('User not found'));
		}
		if (user.role !== 'community') {
			return next(
				AppError.forbidden('You are not allowed to access this route')
			);
		}
		next();
	}
);

// get my details
export const getMyDetails = catchAsync(
	async (req: IUserRequest, res: Response, next: NextFunction) => {
		const user = (await User.findById(req.auth.id)) as IUser;
		if (!user) {
			return next(AppError.notFound('User not found'));
		}
		return res.status(200).json({
			status: 'success',
			data: {
				user,
			},
		});
	}
);

// signout user
export const signOut = (req: Request, res: Response) => {
	res.clearCookie('token');
	return res.status(200).json({
		status: 'success',
		message: 'User signed out successfully',
	});
};
