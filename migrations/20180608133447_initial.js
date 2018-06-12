
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('materials', function (table) {
      table.increments().primary();
      table.string('name');
      table.string('instruction');
    }),

    knex.schema.createTable('sentences', function (table) {
      table.increments().primary();
      table.text('sentence');
      table.integer('materials_id').unsigned().references('materials.id');
    }),

    knex.schema.createTable('tags', function (table) {
      table.increments().primary();
      table.string('name');
      table.integer('materials_id').unsigned().references('materials.id');
    }),

    knex.schema.createTable('labels', function (table) {
      table.increments().primary();
      table.string('partial');
      table.integer('materials_id').unsigned().references('materials.id');
      table.integer('sentences_id').unsigned().references('sentences.id');
      table.integer('tags_id').unsigned().references('tags.id');
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
