import express from 'express';
import studentController from '../controllers/studentController';

const router = express.Router();

router.post('/', studentController.create);

export default router;
