import express from 'express';
import teacherController from '../controllers/teacherController';
import teacherClassController from '../controllers/teacherClassController';

const router = express.Router();

router.post('/', teacherController.create);
router.get('/', teacherController.listAll);
router.get('/:id', teacherController.listOne);
router.delete('/:id', teacherController.delete);

router.put(
  '/:teacherId/class/:classId',
  teacherClassController.updateTeacherClass
);
export default router;
