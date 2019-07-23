
exports.up = function(knex) {
  return knex.schema.createTable('tasks', table => {
    table.increments();
    table.text('title')
      .notNullable()
      .unique();
    table.text('description');
    table.boolean('completed')
      .defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
