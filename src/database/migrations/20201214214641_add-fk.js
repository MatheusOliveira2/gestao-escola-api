exports.up = function (knex) {
  return knex.schema.table('students', function (table) {
    table.integer('studentClass').unsigned().references('id').inTable('class');
  });
};

exports.down = function (knex) {
  return knex.schema.table('students', function (table) {
    table.dropForeign('studentClass');
    table.dropColumn('studentClass');
  });
};
