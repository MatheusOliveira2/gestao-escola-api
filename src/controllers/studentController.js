import studentModel from '../models/studentModel';

export default {
  listAll: () => {},

  create: async (req, res) => {
    const { name, age } = req.body;
    try {
      const student = await studentModel.create({ name, age });
      if (student) res.status(200).send({ id: student.id, name, age });
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
