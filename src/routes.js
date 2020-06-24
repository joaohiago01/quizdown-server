const express = require('express');

const routes = express.Router();

const QuestionController = require('./controllers/QuestionController');
const QuizController = require('./controllers/QuizController');

routes.get("/questions", QuestionController.index);
routes.get("/questions/:quizId", QuestionController.show);

routes.get("/quizzes", QuizController.index);

module.exports = routes;