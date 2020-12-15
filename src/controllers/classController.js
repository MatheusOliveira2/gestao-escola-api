import classModel from '../models/classModel';

export default {
  create: async (req, res) => {
    const { name } = req.body;
    try {
      const schoolClass = await classModel.create({ name });
      if (schoolClass) res.status(200).send({ id: schoolClass.id, name });
    } catch (err) {
      res.status(400).send(err);
    }
  },

  listAll: async (_req, res) => {
    try {
      const schoolClasses = await classModel.listAll();
      if (schoolClasses) res.status(200).send(schoolClasses);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  listOne: async (req, res) => {
    try {
      const schoolClasses = await classModel.listAll(req.params.id);
      if (schoolClasses) res.status(200).send(schoolClasses);
    } catch (err) {
      res.status(400).send(err);
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await classModel.delete(req.params.id);
      res.send(200).send(deleted);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
