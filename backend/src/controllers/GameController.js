const axios = require('axios');
const Game = require('../model/Game');

module.exports = {
  async store(req, res) {
    const { name } = req.body;

    const game = await Game.create({ player: name });

    return res.json(game);
  },
};
