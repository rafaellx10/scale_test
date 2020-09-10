const { Schema, model } = require('mongoose');

const GameSchema = new Schema(
  {
    player: {
      type: String,
      require: true,
    },
    guess: [
      {
        type: Number,
      },
    ],
    game_over: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Game', GameSchema);
