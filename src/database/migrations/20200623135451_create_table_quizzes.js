
exports.up = function(knex) {
    return knex.schema.createTable('quizzes', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('pointValue').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('quizzes');
};
