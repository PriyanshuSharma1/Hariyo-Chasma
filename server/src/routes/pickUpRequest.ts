import { isCommunity, isLoggedIn } from '@/controllers/auth';
import {
	createPickUpRequest,
	getAllPickUpRequest,
	getPickUpRequestByUser,
} from '@/controllers/pickUpRequest';
import { Router } from 'express';

const router = Router();

router.post('/create', isLoggedIn, createPickUpRequest);
router.get('/:user', isLoggedIn, getPickUpRequestByUser);
router.get('/', isLoggedIn, isCommunity, getAllPickUpRequest);

export default router;
