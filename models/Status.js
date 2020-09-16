let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let StatusSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  hp: {
    type: int,
    required: true,
  },
  maxHp: {
    type: int,
    required: true,
  },
  damage: {
    type: int,
    required: true,
  },
  defence: {
    type: int,
    required: true,
  },
  level: {
    type: int,
    required: true,
  },
  exp: {
    type: int,
    required: true,
  },
  expToLevel: {
    type: int,
    required: true,
  },
  gold: {
    type: int,
    required: true,
  },
});

let Status = mongoose.model("Status", StatusSchema);

module.exports = Status;
