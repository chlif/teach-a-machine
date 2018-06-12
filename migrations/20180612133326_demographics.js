
exports.up = function(knex, Promise) {
  return knex.schema.createTable('demographics', function (table) {
    table.increments().primary();
    table.string('gender');
    table.integer('ageGroup');
    table.integer('materials_id').unsigned().references('materials.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('demographics');
};
