const knex = require('../database/connection');

module.exports = {

    async index(request, response) {
        const quizzes = await knex('quizzes');
        return response.json(quizzes);
    }
}