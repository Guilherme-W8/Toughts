import express from 'express';
import ToughtController from '../controllers/ToughtController.js';
const router = express.Router();

// Controllers

router.get('/', ToughtController.showToughts);

export default router;