const { Schema, model } = require('mongoose');

const GameSchema = new Schema(
  {
    player: {
      type: String,
      require: true,
    },
    guesses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Guess',
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
