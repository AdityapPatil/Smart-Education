import express from 'express';
import { updateProgress, getProgress } from '../controllers/progressController.js';
const router = express.Router();
router.post('/', updateProgress);
router.get('/:studentId', getProgress);
export default router;
