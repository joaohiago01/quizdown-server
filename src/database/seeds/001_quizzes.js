
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('quizzes').insert([
    {
      name: 'Naruto',
      description: 'Teste seus conhecimentos do mundo ninja.',
      pointValue: '100'
    },

    {
      name: 'Shingeki No Kyojin',
      description: 'Descubra o quanto você sabe sobre o cruél mundo dos titãs.',
      pointValue: '100'
    },

    {
      name: 'Fullmetal Alchemist',
      description: 'Será você um bom alquimista?',
      pointValue: '100'
    },

    {
      name: 'One Piece',
      description: 'Tesouros e riquezas, o quanto você sabe sobre One Piece?',
      pointValue: '100'
    },

    {
      name: 'Hunter X Hunter',
      description: 'Você seria um bom Hunter?',
      pointValue: '100'
    },

  ]);
  ;
};
