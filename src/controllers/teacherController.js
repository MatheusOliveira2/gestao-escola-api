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

  delete: async (req, res) => {
    try {
      const deleted = await teacherModel.delete(req.params.id);
      res.send(200).send(deleted);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
