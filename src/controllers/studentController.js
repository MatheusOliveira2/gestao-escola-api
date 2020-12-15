import studentModel from '../models/studentModel';

export default {
  create: async (req, res) => {
    const { name, age } = req.body;
    try {
      const student = await studentModel.create({ name, age });
      if (student) res.status(200).send({ id: student.id, name, age });
    } catch (err) {
      res.status(400).send(err);
    }
  },

  listAll: async (_req, res) => {
    try {
      const students = await studentModel.listAll();
      if (students) res.status(200).send(students);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  listOne: async (req, res) => {
    try {
      const student = await studentModel.listOne(req.params.id);
      if (student[0]) res.status(200).send(student[0]);
      else {
        res.status(400).send('Não encontrado');
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await studentModel.delete(req.params.id);
      if (deleted > 0) res.send(200).send();
      else {
        res.status(400).send('Não encontrado');
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
