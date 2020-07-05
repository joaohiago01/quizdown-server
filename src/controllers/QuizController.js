const knex = require('../database/connection');

module.exports = {

    async index(request, response) {
        const quizzes = await knex('quizzes');
        const serializedQuizzes = quizzes.map(quiz => {
            return {
                id: quiz.id,
                name: quiz.name,
                image_url: `http://192.168.0.116:3333/uploads/${quiz.image}`,//`http://192.168.100.33:3333/uploads/${quiz.image}`
                description: quiz.description,
                pointValue: quiz.pointValue,
            };
        });

        return response.json(serializedQuizzes);

    },

    async show(request, response) {
        const { id } = request.params;
        const quiz = await knex('quizzes').where('id', id);
        const serializedQuiz = quiz.map(quiz => {
            return {
                id: quiz.id,
                name: quiz.name,
                image_url: `http://192.168.0.116:3333/uploads/${quiz.image}`,//`http://192.168.100.33:3333/uploads/${quiz.image}`
                description: quiz.description,
                pointValue: quiz.pointValue,
            };
        });

        return response.json(serializedQuiz.pop());

    },

    async create(request, response) {

        const { name, description, pointValue } = request.body

        await knex('quizzes').insert({
            name,
            description,
            pointValue
        });

        return response.status(201).send()
    },

    async update(request, response) {

        const { name, description, pointValue } = request.body
        const { id } = request.params

        await knex('quizzes').update({
            name,
            description,
            pointValue
        }).where('id', id);

        return response.send()
    },

    async delete(request, response) {

        const { id } = request.params

        await knex('quizzes').where('id', id).del()

        return response.send()
    }
}