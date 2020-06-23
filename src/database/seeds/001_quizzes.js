
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quizzes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quizzes').insert([
        {name: 'Naruto',
        description: 'Teste seus conhecimentos do mundo ninja',
        pointValue: '100'},

        {name: 'Shigenki No Kyojin',
        description: 'Descubra o quanto você sabe sobre o cruél mundo dos titãs',
        pointValue: '100'},

        {name: 'Full Metal Alchimist',
        description: 'Será você um bom alquimista?',
        pointValue: '100'},

        {name: 'One Piece',
        description: 'Tesouros e riquezas, o quanto você sabe sobre One Piece?',
        pointValue: '100'},

        {name: 'Hunter X Hunter',
        description: 'Você seria um bom Hunter?',
        pointValue: '100'},

      ]);
    });
};
