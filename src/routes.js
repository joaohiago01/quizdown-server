const express = require('express');


const routes = express.Router();

const QuestionController = require('./controllers/QuestionController');
const QuizController = require('./controllers/QuizController');

routes.get("/", QuestionController.index);
routes.get("/quizzes",QuizController.index);

module.exports = routes;