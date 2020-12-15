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

  delete: async (id) => {
    return db('students').where({ id: id }).del();
  },
};
