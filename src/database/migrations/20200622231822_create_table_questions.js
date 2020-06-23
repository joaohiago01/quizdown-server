//AQUI TEREMOS UM RELACIONAMENTO 1:N COM A TABELA QUIZ (QUIZ 1 : N QUESTION),
//ABSTRAI DA SEGUINTE FORMA: UMA PERGUNTA TEM 4 COLUNAS, QUE REPRESENTAM 4 ALTERNATIVAS DIFERENTES,
//E UMA COLUNA INDICANDO O NÚMERO DA ALTERNATIVA CORRETA
exports.up = function (knex) {
    return knex.schema.createTable('questions', table => {
        table.increments('id').primary();
        table.string('alternativeOne').notNullable();
        table.string('alternativeTwo').notNullable();
        table.string('alternativeThree').notNullable();
        table.string('alternativeFour').notNullable();
        table.integer('rightAnswer').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('questions');
};
