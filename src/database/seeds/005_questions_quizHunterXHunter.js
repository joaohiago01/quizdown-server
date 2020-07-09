exports.seed = function (knex) {
  // Inserts seed entries
  return knex('questions').insert([
    {
      question: 'Quantas pessoas foram qualificadas para a fase final do exame hunter?',
      alternativeOne: '7',
      alternativeTwo: '9',
      alternativeThree: '10',
      alternativeFour: '8',
      rightAnswer: 2,
      quiz_id: 5
    },
    {
      question: 'Qual a classificação de Hisoka na queda de braço das Aranhas?',
      alternativeOne: '3º lugar',
      alternativeTwo: '4º lugar',
      alternativeThree: '5º lugar',
      alternativeFour: '2º lugar',
      rightAnswer: 1,
      quiz_id: 5
    },
    {
      question: 'Quantos tipos de arma Kaito pode fazer com a técnica Crazy Slots?',
      alternativeOne: '7',
      alternativeTwo: '12',
      alternativeThree: '10',
      alternativeFour: '9',
      rightAnswer: 4,
      quiz_id: 5
    },
    {
      question: 'Quais Hatsus (Nen) Razor usa na técnica dos 14 demônios?',
      alternativeOne: 'Materialização e Manipulação',
      alternativeTwo: 'Materialização, Transformação e Manipulação',
      alternativeThree: 'Emissão e Manipulação',
      alternativeFour: 'Transformação e Manipulação',
      rightAnswer: 3,
      quiz_id: 5
    },
    {
      question: 'Meruem pertence a qual categoria de Hatsu (Nen)?',
      alternativeOne: 'Reforço',
      alternativeTwo: 'Emissão',
      alternativeThree: 'Especialização',
      alternativeFour: 'Transformação',
      rightAnswer: 3,
      quiz_id: 5
    },
    {
      question: 'O que significa o kanji estampado na camisa de Netero?',
      alternativeOne: 'Esperança',
      alternativeTwo: 'Força',
      alternativeThree: 'Coração',
      alternativeFour: 'Netero',
      rightAnswer: 3,
      quiz_id: 5
    },
    {
      question: 'Quem mata Yupi?',
      alternativeOne: 'Killua',
      alternativeTwo: 'Meruem',
      alternativeThree: 'Pitou',
      alternativeFour: 'Welfin',
      rightAnswer: 4,
      quiz_id: 5
    },
    {
      question: 'Quem ajuda Gon e Killua a achar artefatos faliosos em uma feira?',
      alternativeOne: 'Kurapika',
      alternativeTwo: 'Hisoka',
      alternativeThree: 'Zepile',
      alternativeFour: 'Leorio',
      rightAnswer: 3,
      quiz_id: 5
    },
    {
      question: 'Quantos membros da família Zoldyck já foram citados?',
      alternativeOne: '7',
      alternativeTwo: '10',
      alternativeThree: '9',
      alternativeFour: '8',
      rightAnswer: 2,
      quiz_id: 5
    },
    {
      question: 'Que Zodíaco o Ging é?',
      alternativeOne: 'Javali',
      alternativeTwo: 'Boi',
      alternativeThree: 'Macaco',
      alternativeFour: 'Rato',
      rightAnswer: 1,
      quiz_id: 5
    },
  ]);
};