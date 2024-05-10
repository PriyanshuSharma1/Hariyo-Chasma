import catchAsync from '@/utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
import Notification from '@/models/entity/Notification';

export const createNotification = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let { message, address, community } = req.body;
		address = address || '28 Kilo';
		community = community || 'Dhulikhel';
		const image = req.file?.path;
		const notification = await Notification.create({
			message,
			image,
			address,
			community,
		});
		res.status(201).json({ status: 'success', notification });
	}
);

export const getAllNotifications = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const notifications = await Notification.find().sort('-createdAt');
		res.status(200).json({ status: 'success', notifications });
	}
);

export const getNotificationsByAddress = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const { address } = req.params;
		const notifications = await Notification.find({ address: address }).sort(
			'-createdAt'
		);
		res.status(200).json({ status: 'success', notifications });
	}
);
