const { Schema, model } = require('mongoose');

const GuessSchema = new Schema(
  {
    value: {
      type: Number,
      require: true,
    },
    status: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Guess', GuessSchema);
