exports.up = function (knex) {
  return knex.schema.createTable('class', (table) => {
    table.increments('id');
    table.text('name').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('class');
};
