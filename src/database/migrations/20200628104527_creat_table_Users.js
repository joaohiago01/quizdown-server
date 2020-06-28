const { table } = require("../connection");

exports.up = function(knex) {
  return knex.schema.createTable('users', table =>{
      table.increments('id')
      table.text('username').unique().notNullable()

      table.timestamp('created_at').defaultTo(knex.fn.now())
  })
  
};

exports.down = knex => knex.schema.droptable('users')
  

