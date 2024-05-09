import { Router } from 'express';
import { isLoggedIn, signIn, signUp, getMyDetails } from '@/controllers/auth';

const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/me', isLoggedIn, getMyDetails);

export default router;
