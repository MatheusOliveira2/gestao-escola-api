import studentModel from '../models/studentModel';
import classModel from '../models/classModel';
import studentClassModel from '../models/studentClassModel';

export default {
  updateStudentClass: async (req, res) => {
    const student = await studentModel.listOne(req.params.studentId);
    if (student.length === 0) res.send({ error: 'Estudante não encontrado!' });
    const schoolClass = await classModel.listOne(req.params.classId);
    if (schoolClass.length === 0) res.send({ error: 'Classe não encontrada!' });

    const updated = await studentClassModel.updateStudentClass(
      req.params.studentId,
      req.params.classId
    );
    if (updated > 0) {
      student[0].studentClass = req.params.classId;
      res.send(student);
    } else {
      res.send('Usuário não atualizado!');
    }
  },
};
