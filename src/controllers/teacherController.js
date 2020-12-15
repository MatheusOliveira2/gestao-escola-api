import teacherModel from '../models/teacherModel';

export default {
  create: async (req, res) => {
    const { name } = req.body;
    try {
      const teacher = await teacherModel.create({ name });
      if (teacher) res.status(200).send({ id: teacher.id, name });
    } catch (err) {
      res.status(400).send(err);
    }
  },

  listAll: async (_req, res) => {
    try {
      const teachers = await teacherModel.listAll();
      if (teachers) res.status(200).send(teachers);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  listOne: async (req, res) => {
    try {
      const teacher = await teacherModel.listOne(req.params.id);
      if (teacher[0]) res.status(200).send(teacher[0]);
      else {
        res.status(400).send('Não encontrado');
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await teacherModel.delete(req.params.id);
      if (deleted > 0) res.send(200).send();
      else {
        res.status(400).send('Não encontrado');
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
