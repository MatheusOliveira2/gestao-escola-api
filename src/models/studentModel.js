import knex from 'knex';
import config from '../../knexfile';

const db = knex(config);

export default {
  create: async (student) => {
    const result = db('students')
      .insert(student)
      .then((ids) => ({ id: ids[0] }));
    return result;
  },
};
