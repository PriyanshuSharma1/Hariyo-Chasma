import mongoose from 'mongoose';

export interface IPickUpRequest {
	user: mongoose.Schema.Types.ObjectId;
	address: string;
	community: string;
	houseNumber: Number;
	onFulfilled: () => void;
}
