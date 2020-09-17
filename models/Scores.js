let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let ScoresSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  level: {
    type: int,
    required: true,
  },
  gold: {
    type: int,
    required: true,
  },
});

let Scores = mongoose.model("Scores", ScoresSchema);

module.exports = Scores;
