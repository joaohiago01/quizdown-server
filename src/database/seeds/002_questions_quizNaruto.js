exports.seed = function (knex) {
  // Inserts seed entries
  return knex('questions').insert([
    {
      question: 'Qual o nome da bijuu do Naruto?',
      alternativeOne: 'Matabi',
      alternativeTwo: 'Kokuo',
      alternativeThree: 'Hank',
      alternativeFour: 'Kurama',
      rightAnswer: 4,
      quiz_id: 1
    },
    {
      question: 'Quais são os membros do Time Minato?',
      alternativeOne: 'Kakashi Hatake, Obito Uchiha e Rin Nohara',
      alternativeTwo: 'Obito Uchiha, Mei Terumi e Maito Gai',
      alternativeThree: 'Kushina Uzumaki, Hashirama Senju e Mito Uzumaki',
      alternativeFour: 'Rin Nohara, Sasuke Uchiha e Itachi Uchiha',
      rightAnswer: 1,
      quiz_id: 1
    },
    {
      question: 'Quem ensinou o Rasengan para Minato?',
      alternativeOne: 'Jiraiya',
      alternativeTwo: 'Terceiro Hokage',
      alternativeThree: 'Kakashi',
      alternativeFour: 'Nenhuma das alternativas',
      rightAnswer: 4,
      quiz_id: 1
    },
    {
      question: 'Qual o nome do sensei do Time 7?',
      alternativeOne: 'Gai',
      alternativeTwo: 'Asuma',
      alternativeThree: 'Kakashi',
      alternativeFour: 'Kurenai',
      rightAnswer: 3,
      quiz_id: 1
    },
    {
      question: 'Naruto Uzumaki é o que de Jiraya?',
      alternativeOne: 'Sobrinho',
      alternativeTwo: 'Primo',
      alternativeThree: 'Neto',
      alternativeFour: 'Afilhado',
      rightAnswer: 4,
      quiz_id: 1
    },
    {
      question: 'Qual o nome do pai de Sasuke e Itachi?',
      alternativeOne: 'Fugaku Uchiha',
      alternativeTwo: 'Nidaime Hokage',
      alternativeThree: 'Madara Uchiha',
      alternativeFour: 'Itachi Uchiha',
      rightAnswer: 1,
      quiz_id: 1
    },
    {
      question: 'Quais os nomes dos ninjas do clã Senju que se tornaram Hokages?',
      alternativeOne: 'Hashirama, Kisame e Sasuke',
      alternativeTwo: 'Tsunade, Naruto e Kushina',
      alternativeThree: 'Tsunade, Hashirama e Tobirama',
      alternativeFour: 'Sasuke, Juugo e Karin',
      rightAnswer: 3,
      quiz_id: 1
    },
    {
      question: 'Quais os dois clãs de Konoha que ultilizam doujutsus?',
      alternativeOne: 'Yamanaka e Nara',
      alternativeTwo: 'Hyuuga e Uchiha',
      alternativeThree: 'Fuuma e Hyuuga',
      alternativeFour: 'Uchiha e Aburame',
      rightAnswer: 2,
      quiz_id: 1
    },
    {
      question: 'Qual companheiro de Kakashi foi morto em uma missão de guerra?',
      alternativeOne: 'Rin',
      alternativeTwo: 'Minato Namikaze',
      alternativeThree: 'Gai',
      alternativeFour: 'Uchiha Obito',
      rightAnswer: 4,
      quiz_id: 1
    },
    {
      question: 'De que aldeia é o(a) ninja que Orochimaru mata e se transforma para entrar na floresta proibida?',
      alternativeOne: 'Som',
      alternativeTwo: 'Grama',
      alternativeThree: 'Areia',
      alternativeFour: 'Chuva',
      rightAnswer: 2,
      quiz_id: 1
    },
  ]);
};