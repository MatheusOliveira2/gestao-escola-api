import knex from 'knex';
import config from '../../knexfile';

const db = knex(config);

export default {
  updateTeacherClass: async (teacherId, classId) => {
    return db('teacher')
      .where({ id: teacherId })
      .update({ teacherClass: classId });
  },
};
