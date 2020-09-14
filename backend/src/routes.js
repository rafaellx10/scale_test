const express = require('express');

const GameController = require('./controllers/GameController');
const GuessController = require('./controllers/GuessController');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: `Hello ${request.query.name}` });
  //URL: http://localhost:3333/?name=Rafael
});

routes.post('/game', GameController.store);
routes.post('/guess', GuessController.store);

module.exports = routes;
