const knex = require('../database/connection');

module.exports = {

    async index(request, response) {
        const quizzes = await knex('quizzes');
        return response.json(quizzes);
    },

    async create(request, response) {

        const {name, description, pointValue} = request.body

        await knex('quizzes').insert({
            name,
            description,
            pointValue
        });

        return response.status(201).send()
    },

    async update(request, response) {

        const {name, description, pointValue} = request.body
        const {id} = request.params

        await knex('quizzes').update({
            name,
            description,
            pointValue
        }).where({id});

        return response.send()
    },

    async delete(request, response) {

        const {id} = request.params

        await knex('quizzes').where({id}).del()

        return response.send()
    }
}