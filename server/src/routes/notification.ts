import { Router } from 'express';
import {
	createNotification,
	getAllNotifications,
	getNotificationsByAddress,
} from '@/controllers/notification';
import upload from '@/utils/multer';

const router = Router();

router.post('/', upload.single('file'), createNotification);
router.get('/', getAllNotifications);
router.get('/:address', getNotificationsByAddress);

export default router;
