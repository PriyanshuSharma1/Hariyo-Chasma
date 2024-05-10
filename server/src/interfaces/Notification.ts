import mongoose, { mongo } from 'mongoose';

export interface INotification extends mongoose.Document {
	message: string;
	image: string;
	address: string;
	community: string;
}

export interface IUserNotification extends mongoose.Document {
	userId: mongoose.Schema.Types.ObjectId;
	notificationId: mongoose.Schema.Types.ObjectId;
	isRead: boolean;
}
