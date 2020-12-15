import knex from 'knex';
import config from '../../knexfile';

const db = knex(config);

export default {
  updateStudentClass: async (studentId, classId) => {
    return db('students')
      .where({ id: studentId })
      .update({ studentClass: classId });
  },
};
