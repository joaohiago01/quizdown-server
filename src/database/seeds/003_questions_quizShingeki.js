exports.seed = function (knex) {
  // Inserts seed entries
  return knex('questions').insert([
    {
      question: 'Quais são as três muralhas existentes em que a humanidade vive para se proteger dos titãs?',
      alternativeOne: 'Shiganshina, Rose e Manta',
      alternativeTwo: 'Marta, Rosália e Siná',
      alternativeThree: 'Maria, Rose e Sina',
      alternativeFour: 'Marta, Rosa e Simbala',
      rightAnswer: 3,
      quiz_id: 2
    },
    {
      question: 'Qual titã que destruiu a muralha Maria no inicio do anime?',
      alternativeOne: 'Titã Bestial',
      alternativeTwo: 'Titã Encouraçado',
      alternativeThree: 'Titã Femêa',
      alternativeFour: 'Titã Colossal',
      rightAnswer: 4,
      quiz_id: 2
    },
    {
      question: 'As muralhas foram criadas pelo rei Fritz 145º que usou o poder do titã primordial. Qual foi o real motivo do rei Fritz ter criado as muralhas usando titãs de 50 metros?',
      alternativeOne: 'Foi para proteger a raça humana',
      alternativeTwo: 'O rei queria criar um exercito de titãs de 50 metros para atacar Marley se eles fossem o atacar',
      alternativeThree: 'Foi para ganhar a guerra entre Marley e Eldia',
      alternativeFour: 'Ele sabia que Marley iria jogar titãs na ilha Paradis, onde ele está',
      rightAnswer: 2,
      quiz_id: 2
    },
    {
      question: 'A mãe de que personagem virou titã?',
      alternativeOne: 'Eren',
      alternativeTwo: 'Conny',
      alternativeThree: 'Reiner',
      alternativeFour: 'Levi',
      rightAnswer: 2,
      quiz_id: 2
    },
    {
      question: 'Qual perssonagem é fissurado(a) em titãs?',
      alternativeOne: 'Historia Reiss',
      alternativeTwo: 'Ymir Fritz',
      alternativeThree: 'Erwin Smith',
      alternativeFour: 'Zoë Hange',
      rightAnswer: 4,
      quiz_id: 2
    },
    {
      question: 'Qual cidade de Rose foi invadida pelos titãs e recuperada depois?',
      alternativeOne: 'Shiganshina',
      alternativeTwo: 'Trost',
      alternativeThree: 'Karanes',
      alternativeFour: 'Nenhuma cidade da muralha Rose foi invadida',
      rightAnswer: 2,
      quiz_id: 2
    },
    {
      question: 'Quem é o líder da Guarnição?',
      alternativeOne: 'Hannes',
      alternativeTwo: 'Erwin',
      alternativeThree: 'Levi',
      alternativeFour: 'Pixis',
      rightAnswer: 4,
      quiz_id: 2
    },
    {
      question: 'Durante o "Plano de Retomada", Eren se transforma em titã para concluir a principal parte do plano. Mas algo inesperado acontece. O que houve?',
      alternativeOne: 'Ele não consegue se transformar',
      alternativeTwo: 'O seu formato de titã é alterado',
      alternativeThree: 'Eren ataca Mikasa',
      alternativeFour: 'Eren devora um humano',
      rightAnswer: 3,
      quiz_id: 2
    },
    {
      question: 'Quem é conhecida como "Garota Batata"?',
      alternativeOne: 'Sasha Braus',
      alternativeTwo: 'Carla Jaeger',
      alternativeThree: 'Hange Zoë',
      alternativeFour: 'Rico Brzenska',
      rightAnswer: 1,
      quiz_id: 2
    },
    {
      question: 'Qual o ponto fraco dos titãs?',
      alternativeOne: 'Barriga',
      alternativeTwo: 'Cabeça',
      alternativeThree: 'Nuca',
      alternativeFour: 'Braços',
      rightAnswer: 3,
      quiz_id: 2
    },
  ]);
};
