exports.seed = function (knex) {

  return knex('users').insert([

    {
      username: 'Littlebird',
      skips: 30,
      points: 1000
    },

  ]);

};