const knex = require('../database/connection');

module.exports = {

    async index(request, response) {//COMENTANDO SÓ PRA AVISAR QUE ESSE TRECHO É TESTE
        const questions = await knex('questions');
        return response.json(questions);
    }
}