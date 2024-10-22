import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();

router.get('/login', AuthController.login);
router.get('/register', AuthController.register);

export default router;