const express = require('express');

const routes = express.Router();

const QuestionController = require('./controllers/QuestionController');

routes.get("/", QuestionController.index);

module.exports = routes;