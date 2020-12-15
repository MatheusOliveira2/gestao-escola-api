exports.up = function (knex) {
  return knex.schema.table('class', function (table) {
    table
      .integer('classTeacher')
      .unsigned()
      .references('id')
      .inTable('teacher');
  });
};

exports.down = function (knex) {
  return knex.schema.table('class', function (table) {
    table.dropForeign('classTeacher');
    table.dropColumn('classTeacher');
  });
};
