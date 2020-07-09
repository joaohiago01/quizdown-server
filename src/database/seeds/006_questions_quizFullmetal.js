exports.seed = function (knex) {
  // Inserts seed entries
  return knex('questions').insert([
    {
      question: 'Qual é o princípio básico da alquimia?',
      alternativeOne: 'Para realizar uma transmutação é preciso de um círculo de transmutação',
      alternativeTwo: 'Na alquimia é preciso haver um equilíbrio de energia natural e a energia corporal, para que a matéria possa ser transmutada',
      alternativeThree: 'Para se ter algo através da alquimia é preciso trocar algo de valor equivalente',
      alternativeFour: 'Não se pode transmutar algo em ouro',
      rightAnswer: 3,
      quiz_id: 3
    },
    {
      question: 'Os Homúnculos quando criados, não tem força nem imortalidade. Eles adquirem a sua energia e força através de uma fonte vital. Que fonte é essa?',
      alternativeOne: 'Alquimia',
      alternativeTwo: 'Matando',
      alternativeThree: 'Metal',
      alternativeFour: 'Pedra Filosofal',
      rightAnswer: 4,
      quiz_id: 3
    },
    {
      question: 'O que é um tabu na alquimia?',
      alternativeOne: 'Transmutar uma alma',
      alternativeTwo: 'Realizar uma transmutação humana',
      alternativeThree: 'Transmutar pedra em ouro',
      alternativeFour: 'Transmutar pessoas vivas em quimeras',
      rightAnswer: 2,
      quiz_id: 3
    },
    {
      question: 'Como os Homúnculos são conhecidos?',
      alternativeOne: 'Soldados Homúnculos',
      alternativeTwo: 'Filhos de Xerxes',
      alternativeThree: 'Os Sete Pecados Capitais',
      alternativeFour: 'Nova Ordem de Ishbal',
      rightAnswer: 3,
      quiz_id: 3
    },
    {
      question: 'Um homem tem matado os alquimistas federais. Quem é esse homem?',
      alternativeOne: 'Solf J. Kimblee',
      alternativeTwo: 'Basque Grand',
      alternativeThree: 'Scar',
      alternativeFour: 'Um Ishbaliano',
      rightAnswer: 3,
      quiz_id: 3
    },
    {
      question: 'Só alquimistas que viram "A verdade" ganham uma habilidade incomum. Que habilidade é essa?',
      alternativeOne: 'Transmutar com alquimia sem circulo de transmutação',
      alternativeTwo: 'Imortalidade',
      alternativeThree: 'Teleportar',
      alternativeFour: 'Criar Pedras Filosofais',
      rightAnswer: 1,
      quiz_id: 3
    },
    {
      question: 'Ao decorrer da história, um estrangeiro e seus acompanhantes viajam ilegalmente pelo pais procurando informações sobre a Pedra Filosofal, para que assim pudesse levar para o imperador de seu país. Quem é esse estrangeiro?',
      alternativeOne: 'Xiao Mei',
      alternativeTwo: 'Ling Yao',
      alternativeThree: 'Fu',
      alternativeFour: 'Lan Fan',
      rightAnswer: 2,
      quiz_id: 3
    },
    {
      question: 'No fim de tudo, Ed conseguiu derrotar o Homem do Frasco, e foi até a verdade para resgatar seu irmão. Só que exigia um preço. O que Ed trocou pelo seu irmão?',
      alternativeOne: 'Ele levou seu irmão de lá sem precisar trocar por algo equivalente',
      alternativeTwo: 'Ele abriu mão dasua vida pelo seu irmão',
      alternativeThree: 'Ele abriu mão da alquimia',
      alternativeFour: 'Ele trocou o pai dele pelo seu irmão',
      rightAnswer: 3,
      quiz_id: 3
    },
    {
      question: 'Qual o nome da mãe adotiva do coronel Roy Mustang?',
      alternativeOne: 'Madame Christmas',
      alternativeTwo: 'Olivia Douglas W. J. May',
      alternativeThree: 'Gracia',
      alternativeFour: 'Maria Ross',
      rightAnswer: 1,
      quiz_id: 3
    },
    {
      question: 'Quem desses não faz parte dos subordinados do Mustang?',
      alternativeOne: 'Havock',
      alternativeTwo: 'Breda',
      alternativeThree: 'Fauman',
      alternativeFour: 'Grumman',
      rightAnswer: 4,
      quiz_id: 3
    },
  ]);
};