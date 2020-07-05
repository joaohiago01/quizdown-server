const express = require('express');

const routes = express.Router();

const QuestionController = require('./controllers/QuestionController');
const QuizController = require('./controllers/QuizController');
const UserController = require('./controllers/UserController');

routes.get("/users", UserController.index);
routes.post("/users",UserController.create);
routes.put("/users",UserController.update);
routes.delete("/users/:id",UserController.delete)

routes.get("/questions", QuestionController.index);
routes.get("/questions/:quiz_id", QuestionController.show);

routes.get("/quizzes", QuizController.index);
routes.get("/quizzes/:id", QuizController.show);
routes.post("/quizzes", QuizController.create);
routes.put("/quizzes/:id", QuizController.update);
routes.delete("/quizzes/:id", QuizController.delete);

module.exports = routes;