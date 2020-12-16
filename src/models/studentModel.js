import knex from 'knex';
import config from '../../knexfile';

const db = knex(config);

export default {
  create: async (student) => {
    return db('students')
      .insert(student)
      .then((ids) => ({ id: ids[0] }));
  },

  listAll: async () => {
    return db('students');
  },

  listOne: async (id) => {
    return db('students').where({ id: id });
  },

  listAllClass: async (classId) => {
    const students = await db('students')
      .where({ studentClass: classId })
      .select('id', 'name');
    return students;
  },

  delete: async (id) => {
    return db('students').where({ id: id }).del();
  },
};
