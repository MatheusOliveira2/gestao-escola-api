exports.up = function (knex) {
  return knex.schema.createTable('students', (table) => {
    table.increments('id');
    table.text('name').notNullable();
    table.integer('age').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('students');
};
