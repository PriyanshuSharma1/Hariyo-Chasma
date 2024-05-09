import { Request } from 'express';

export interface IUserRequest extends Request {
	auth: {
		id: string;
		iat: number;
		exp: number;
	};
}
