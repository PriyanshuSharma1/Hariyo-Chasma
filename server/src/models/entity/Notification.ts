import mongoose from 'mongoose';
import { INotification } from '../../interfaces/Notification';

const NotificationSchema = new mongoose.Schema<INotification>(
	{
		message: { type: String, required: true },
		image: { type: String, required: true },
		address: { type: String, required: true },
		community: { type: String, required: true },
	},
	{
		timestamps: true,
	}
);

const Notification = mongoose.model<INotification>(
	'Notification',
	NotificationSchema
);

export default Notification;
