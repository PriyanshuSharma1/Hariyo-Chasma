import mongoose from 'mongoose';
import { IPickUpRequest } from '@/interfaces/PickUpRequest';

const RequestSchema = new mongoose.Schema<IPickUpRequest>(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		community: {
			type: String,
			required: true,
		},
		houseNumber: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

RequestSchema.methods.onFulfilled = function () {
	// clear all pickup requests
	return this.model('PickUpRequest').deleteMany({});
};

const Request = mongoose.model<IPickUpRequest>('PickUpRequest', RequestSchema);

export default Request;
