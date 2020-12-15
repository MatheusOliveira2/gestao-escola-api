import knex from 'knex';
import config from '../knexfile';

const db = knex(config.development);

const insert = async (student) => {
  return db('students')
    .insert(student)
    .then((ids) => ({ id: ids[0] }));
};

const getAll = async () => {
  return db('students');
};

export { insert, getAll };
