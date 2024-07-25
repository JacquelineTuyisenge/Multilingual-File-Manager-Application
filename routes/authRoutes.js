import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import isUserValid from '../middleware/userMiddleware.js';

const router = express.Router();

router.post('/register', isUserValid, registerUser);
router.post('/login', loginUser);

export default router;
