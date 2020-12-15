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
      const schoolClass = await classModel.listOne(req.params.id);
      if (schoolClass[0]) res.status(200).send(schoolClass[0]);
      else {
        res.status(400).send('Não encontrado');
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },

  delete: async (req, res) => {
    try {
      const deleted = await classModel.delete(req.params.id);
      if (deleted > 0) res.send(200).send();
      else {
        res.status(400).send('Não encontrado');
      }
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
