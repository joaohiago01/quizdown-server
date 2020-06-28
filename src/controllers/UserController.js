const knex = require('../database/connection');

module.exports = {
    async index (request,response){
        const results = await knex('users')

        return response.json(results)
    }

}