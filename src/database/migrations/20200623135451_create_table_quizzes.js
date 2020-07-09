exports.up = function(knex) {
    return knex.schema.createTable('quizzes', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('image').notNullable();
        table.string('description').notNullable();
        table.integer('pointValue').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('quizzes');
};
