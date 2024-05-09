import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
	firstname: string;
	lastname: string;
	phone: Number;
	photo: string;
	address: string;
	houseNumber: number;
	role: string;
	community: string;
	password: string;
	token: string;
	hashPassword: (password: string) => Promise<string>;
	forgotPasswordToken: (email: string) => string;
	comparePassword: (
		password: string,
		hashedPassword: string
	) => Promise<boolean>;
	generateJwtToken: () => Promise<string>;
}
