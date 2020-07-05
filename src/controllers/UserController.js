const knex = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await knex('users')

        return response.json(users)
    },
    async show(request, response) {
        const { id } = request.params
        const user = await knex('users').where('id', id)

        return response.json(user)
    },
    async create(request, response) {
        const { username, skips, points } = request.body

        await knex('users').insert({
            username,
            skips,
            points
        });

        return response.status(201).send()

    },
    async update(request, response, next) {
        try {
            const { username, skips, points } = request.body
            const { id } = request.params

            await knex('users').update({
                username,
                skips,
                points
            }).where('id', id);

            return response.send()

        } catch (error) {
            next(error)
        }
    },
    async delete(request, response, next) {
        try {
            const { id } = request.params

            await knex("users").where('id', id).del()

            return response.send()

        } catch (error) {
            next(error)
        }
    }
}