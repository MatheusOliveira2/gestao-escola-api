import knex from 'knex';
import config from '../../knexfile';

const db = knex(config);

export default {
  create: async (schoolClass) => {
    return db('class')
      .insert(schoolClass)
      .then((ids) => ({ id: ids[0] }));
  },

  listAll: async () => {
    return db('class');
  },

  listOne: async (id) => {
    return db('class').where({ id: id });
  },

  delete: async (id) => {
    return db('class').where({ id: id }).del();
  },
};
