import { json } from 'express';
import classModel from '../models/classModel';
import studentModel from '../models/studentModel';
import teacherModel from '../models/teacherModel';

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
      let schoolClasses = await classModel.listAll();
      const stringClasses = JSON.stringify(schoolClasses);
      schoolClasses = JSON.parse(stringClasses);

      for (let x = 0; x < schoolClasses.length; x++) {
        const studentsClass = await studentModel.listAllClass(
          schoolClasses[x].id
        );
        if (studentsClass) schoolClasses[x].students = studentsClass;
        const teacherClass = await teacherModel.listAllClass(
          schoolClasses[x].id
        );
        if (teacherClass.length > 0) schoolClasses[x].teacher = teacherClass[0];
        else schoolClasses[x].teacher = null;
      }

      if (schoolClasses) res.status(200).send(schoolClasses);
    } catch (err) {
      res.status(400).send(err.message);
    }
  },

  listOne: async (req, res) => {
    try {
      const schoolClass = await classModel.listOne(req.params.id);
      if (schoolClass[0]) {
        const studentsClass = await studentModel.listAllClass(req.params.id);
        if (studentsClass) schoolClass[0].students = studentsClass;
        const teacherClass = await teacherModel.listAllClass(req.params.id);
        if (teacherClass) schoolClass[0].teacher = teacherClass[0];
        res.status(200).send(schoolClass[0]);
      } else {
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
