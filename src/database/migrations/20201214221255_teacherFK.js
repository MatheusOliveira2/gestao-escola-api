exports.up = function (knex) {
  return knex.schema.table('teacher', function (table) {
    table.integer('teacherClass').unsigned().references('id').inTable('class');
  });
};

exports.down = function (knex) {
  return knex.schema.table('teacher', function (table) {
    table.dropForeign('teacherClass');
    table.dropColumn('teacherClass');
  });
};
