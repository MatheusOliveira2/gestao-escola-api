import knex from 'knex';
import config from '../../knexfile';

const db = knex(config);

export default {
  create: async (teacher) => {
    return db('teacher')
      .insert(teacher)
      .then((ids) => ({ id: ids[0] }));
  },

  listAll: async () => {
    return db('teacher');
  },

  delete: async (id) => {
    return db('teacher').delete(id);
  },
};
