import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();

// Register routes
router.get('/register', AuthController.register);
router.post('/register', AuthController.registerPost);

// Login routes
router.get('/login', AuthController.login);
router.post('/login', AuthController.loginPost);
router.get('/logout', AuthController.logout);

export default router;