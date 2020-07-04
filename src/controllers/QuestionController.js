const knex = require('../database/connection');

module.exports = {

    async index(request, response) {
        const questions = await knex('questions').orderBy('quiz_id');
        return response.status(200).json(questions);
    },
    async show(request, response) {
        const { quiz_id } = request.params;
        const questions = await knex('questions').where('quiz_id', quiz_id);
        return response.status(200).json(questions);
    },
}