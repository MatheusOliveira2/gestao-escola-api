import express from 'express';
import studentController from '../controllers/studentController';
import studentClassController from '../controllers/studentClassController';

const router = express.Router();

router.post('/', studentController.create);
router.get('/', studentController.listAll);
router.get('/:id', studentController.listOne);
router.delete('/:id', studentController.delete);

router.put(
  '/:studentId/class/:classId',
  studentClassController.updateStudentClass
);
export default router;
