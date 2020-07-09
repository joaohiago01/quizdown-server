exports.up = function(knex) {
  return knex.schema.createTable('users', table =>{
      table.increments('id')
      table.text('username').unique().notNullable()
      table.integer('skips')
      table.integer('points')
  })
  
};

exports.down = knex => knex.schema.droptable('users');