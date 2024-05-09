import mongoose from 'mongoose';

export interface INotification extends mongoose.Document {
	user: mongoose.Schema.Types.ObjectId;
	message: string;
	isRead: boolean;
}
