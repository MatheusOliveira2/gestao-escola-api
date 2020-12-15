import express from 'express';
import teacherController from '../controllers/teacherController';

const router = express.Router();

router.post('/', teacherController.create);
router.get('/', teacherController.listAll);
router.get('/:id', teacherController.listOne);
router.delete('/:id', teacherController.delete);

export default router;
