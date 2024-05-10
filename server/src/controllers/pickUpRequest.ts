import { IPickUpRequest } from '@/interfaces/PickUpRequest';
import { IUserRequest } from '@/interfaces/Request';
import PickUpRequest from '@/models/entity/PickUpRequest';
import catchAsync from '@/utils/catchAsync';
import { Request, Response, NextFunction } from 'express';

export const createPickUpRequest = catchAsync(
	async (req: IUserRequest, res: Response, next: NextFunction) => {
		const { community, address, houseNumber } = req.body as IPickUpRequest;
		console.log(req);
		const user = req.auth.id;
		const request = await PickUpRequest.create({
			user,
			community,
			address,
			houseNumber,
		});
		res.status(201).json({
			status: 'success',
			data: request,
		});
	}
);

export const getAllPickUpRequest = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		console.log(req);
		const requests = await PickUpRequest.find().populate('user');
		res.status(200).json({
			status: 'success',
			data: requests,
		});
	}
);

export const getPickUpRequestByUser = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		console.log(req.headers);
		const request = await PickUpRequest.find({
			user: req.params.user,
		}).populate('user');
		res.status(200).json({
			status: 'success',
			data: request,
		});
	}
);
