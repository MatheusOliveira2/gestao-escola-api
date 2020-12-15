import express from 'express';
import classController from '../controllers/classController';

const router = express.Router();

router.post('/', classController.create);
router.get('/', classController.listAll);
router.get('/:id', classController.listOne);
router.delete('/:id', classController.delete);

export default router;
