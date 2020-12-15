import express from 'express';
import studentController from '../controllers/studentController';

const router = express.Router();

router.post('/', studentController.create);
router.get('/', studentController.listAll);
router.get('/:id', studentController.listOne);
router.delete('/:id', studentController.delete);

export default router;
