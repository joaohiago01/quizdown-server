const knex = require('../database/connection');
const { response } = require('express');

module.exports = {
    async index (request,response){
        const results = await knex('users')

        return response.json(results)
    },
    async create (request, require){
        const { username, skips, points } = request.body

        await knex('users').insert({
            username,
            skips,
            points
        });

        return response.status(201).send();

    },
    async update(request, require, next){
        try{
            const {username, skips, points} = knex.body;
            
            await knex('users').update({
                username,
                skips,
                points
            })
            return response.send()

        }catch(error){
            next(error)
        }


    },
    async delete(request,require,next){
        try{
            const { id } = request.params

            await knex("users").where({id}).del()

            return response.send()
        }catch(error){
            next(error)
        }

    }
    
}


