import { IUser } from '@/interfaces/User';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';

const UserSchema = new mongoose.Schema<IUser>({
	firstname: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
	},
	phone: {
		type: Number,
		unique: true,
		required: true,
		index: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	address: {
		type: String,
		required: true,
	},
	token: {
		type: String,
	},
	community: {
		type: String,
		required: true,
	},
	houseNumber: {
		type: Number,
		required: true,
	},
	photo: {
		type: String,
	},
	role: {
		type: String,
		enum: ['user', 'community'],
		default: 'user',
	},
});

// hash password
UserSchema.methods.hashPassword = async function (password: string) {
	// hash password with bcrypt
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(password, salt);
	return this.password;
};

// forgot password token method
UserSchema.methods.forgotPasswordToken = function (email: string) {
	// generate token
	const token = nanoid(6);
	// save token to user's document
	this.token = token;
	// return token
	return token;
};

// compare password
UserSchema.methods.comparePassword = async function (
	password: string,
	hashedPassword: string
) {
	// compare password with hashed password
	return await bcrypt.compare(password, hashedPassword);
};

UserSchema.methods.generateJwtToken = function () {
	// generate jwt token
	const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET as string, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});
	return token;
};

UserSchema.pre('save', async function (next) {
	// if the password is not modified, skip this middleware
	if (!this.isModified('password')) return next();
	this.password = await this.hashPassword(this.password);
	next();
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
