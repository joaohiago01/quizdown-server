exports.seed = function (knex) {
  // Inserts seed entries
  return knex('questions').insert([
    {
      question: 'Qual nome do antigo Rei dos Piratas?',
      alternativeOne: 'Luffy',
      alternativeTwo: 'Rayleigh',
      alternativeThree: 'Roger',
      alternativeFour: 'Shanks',
      rightAnswer: 3,
      quiz_id: 4
    },
    {
      question: 'Qual tipo de Akuma no Mi Luffy possui?',
      alternativeOne: 'Logia',
      alternativeTwo: 'Paramecia',
      alternativeThree: 'Zoan',
      alternativeFour: 'Nenhuma das alternativas',
      rightAnswer: 2,
      quiz_id: 4
    },
    {
      question: 'Qual nome do Rei de Skypia?',
      alternativeOne: 'Kaido',
      alternativeTwo: 'Gan Fall',
      alternativeThree: 'Enel',
      alternativeFour: 'Shanks',
      rightAnswer: 2,
      quiz_id: 4
    },
    {
      question: 'Qual nome do maior navio de One Piece?',
      alternativeOne: 'Thousand Sunny',
      alternativeTwo: 'Moby Dick',
      alternativeThree: 'Thriler Bark',
      alternativeFour: 'Noah',
      rightAnswer: 4,
      quiz_id: 4
    },
    {
      question: 'Quantos membros possuem entre os Shichibukais?',
      alternativeOne: '8',
      alternativeTwo: '7',
      alternativeThree: '6',
      alternativeFour: '10',
      rightAnswer: 2,
      quiz_id: 4
    },
    {
      question: 'Qual recompensa de Luffy após derrotar Crocodile?',
      alternativeOne: '150.000.000',
      alternativeTwo: '30.000.000',
      alternativeThree: '100.000.000',
      alternativeFour: '15.000.000',
      rightAnswer: 1,
      quiz_id: 4
    },
    {
      question: 'Qual nome do Avô de Luffy?',
      alternativeOne: 'Dragon',
      alternativeTwo: 'Garp',
      alternativeThree: 'Shanks',
      alternativeFour: 'Rayleigh',
      rightAnswer: 2,
      quiz_id: 4
    },
    {
      question: 'Qual personagem foi chamado para ser o décimo mugiwara?',
      alternativeOne: 'Jinbei',
      alternativeTwo: 'Carrot',
      alternativeThree: 'Bartolomeu',
      alternativeFour: 'Caesar Clown',
      rightAnswer: 1,
      quiz_id: 4
    },
    {
      question: 'Luffy é imune a akuma no mi de qual desses shichibukais?',
      alternativeOne: 'Mihawk',
      alternativeTwo: 'Gecko Moria',
      alternativeThree: 'Boa Hancock',
      alternativeFour: 'Crocodile',
      rightAnswer: 3,
      quiz_id: 4
    },
    {
      question: 'Qual dessas é a akuma no mi do Sabo?',
      alternativeOne: 'Mera Mera no mi',
      alternativeTwo: 'Ito Ito no mi',
      alternativeThree: 'Yami Yami no mi',
      alternativeFour: 'Awa Awa no mi',
      rightAnswer: 1,
      quiz_id: 4
    },
  ]);
  ;
};