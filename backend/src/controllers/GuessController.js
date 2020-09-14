const axios = require('axios');

const Guess = require('../model/Guess');
const Game = require('../model/Game');

module.exports = {
  async store(req, res) {
    let min = 0;
    let max = 1000;
    let responseGuessNumber;
    const { value, status, gameId } = req.body;

    const guess = await Guess.create({ value, status });
    const game = await Game.findById(gameId);
    game.guesses.push(guess._id);
    await game.save();

    if (status == 'equal') {
      return res.json({ value, end_game: true });
    }

    for (let i = 0; i < game.guesses.length; i++) {
      const guess = await Guess.findById(game.guesses[i]);
      console.log(guess);
      if (guess.status == 'bigger_than' && guess.value > min) {
        min = guess.value;
      }

      if (guess.status == 'less_than' && guess.value < max) {
        max = guess.value;
      }

      responseGuessNumber = Math.floor(Math.random() * (max - min) + min);
    }

    return res.json({ responseGuessNumber, end_game: false });
  },
};
