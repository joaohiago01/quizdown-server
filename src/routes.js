const express = require('express');

const routes = express.Router();

const QuestionController = require('./controllers/QuestionController');
const QuizController = require('./controllers/QuizController');

routes.get("/questions", QuestionController.index);
routes.get("/questions/:quizId", QuestionController.show);

routes.get("/quizzes", QuizController.index);
routes.post("/quizzes", QuizController.create);
routes.put("/quizzes/:id", QuizController.update);
routes.delete("/quizzes/:id", QuizController.delete);

module.exports = routes;