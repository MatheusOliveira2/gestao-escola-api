import teacherModel from '../models/teacherModel';
import classModel from '../models/classModel';
import teacherClassModel from '../models/teacherClassModel';

export default {
  updateTeacherClass: async (req, res) => {
    const teacher = await teacherModel.listOne(req.params.teacherId);
    if (teacher.length === 0) res.send({ error: 'Professor não encontrado!' });
    const schoolClass = await classModel.listOne(req.params.classId);
    if (schoolClass.length === 0) res.send({ error: 'Classe não encontrada!' });

    const updated = await teacherClassModel.updateTeacherClass(
      req.params.teacherId,
      req.params.classId
    );
    if (updated > 0) {
      teacher[0].teacherClass = req.params.classId;
      res.send(teacher);
    } else {
      res.send('Professor não atualizado!');
    }
  },
};
