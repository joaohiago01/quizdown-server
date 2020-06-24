const knex = require('../database/connection');

module.exports = {

    async index(request, response) {
        const questions = await knex('questions').orderBy('quizId');
        return response.status(200).json(questions);
    },
    async show(request, response) {
        const { quizId } = request.params;
        const questions = await knex('questions').where('quizId', quizId);
        return response.status(200).json(questions);
    },
}