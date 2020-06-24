exports.up = function (knex) {
    return knex.schema.createTable('questions', table => {
        table.increments('id').primary();
        table.string('question').notNullable();
        table.string('alternativeOne').notNullable();
        table.string('alternativeTwo').notNullable();
        table.string('alternativeThree').notNullable();
        table.string('alternativeFour').notNullable();
        table.integer('rightAnswer').notNullable();
        table.integer('quizId')
            .notNullable()
            .references('id')
            .inTable('quizzes');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('questions');
};