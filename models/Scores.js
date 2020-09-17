let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ScoresSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  gold: {
    type: Number,
    required: true,
  },
});

let Scores = mongoose.model("Scores", ScoresSchema);

module.exports = Scores;
