import express from 'express';
import ToughtController from '../controllers/ToughtController.js';
import checkAuth from '../helpers/auth.js';

const router = express.Router();

// Controller functions
router.get('/add', checkAuth, ToughtController.createTought);
router.get('/dashboard', checkAuth, ToughtController.dashboard);
router.get('/', ToughtController.showToughts);

export default router;