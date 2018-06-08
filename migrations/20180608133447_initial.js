
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('materials', function (table) {
      table.increments();
      table.string('name');
    }),

    knex.schema.createTable('sentences', function (table) {
      table.increments();
      table.text('sentence');
      table.integer('materials_id').references('id').inTable('Materials');
    }),

    knex.schema.createTable('tags', function (table) {
      table.increments();
      table.string('name');
      table.integer('materials_id').references('id').inTable('Materials');
    }),

    knex.schema.createTable('labels', function (table) {
      table.increments();
      table.string('partial');
      table.integer('materials_id').references('id').inTable('Materials');
      table.integer('tags_id').references('id').inTable('Tags');
    })

  ]);

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('materials'),
    knex.schema.dropTable('sentences'),
    knex.schema.dropTable('tags'),
    knex.schema.dropTable('labels')
  ]);
};
