const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: `Hello ${request.query.name}` });
  //URL: http://localhost:3333/?name=Rafael
});

module.exports = routes;
