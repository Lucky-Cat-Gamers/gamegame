require("dotenv").config();
const mongoose = require("mongoose");
const db = require("../models");

mongoose.Promise = Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/witchfall_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const mongooseConnection = mongoose.connection;

// If there is an error while connecting, mongoose will log the error
mongooseConnection.on(
  "error",
  console.error.bind(console, "connection error:")
);

// When mongoose connects, it console logs it's connected
mongooseConnection.once("open", () => {
  console.log("Connected to Database");
});

module.exports = (app) => {
  app.get("/load", (req, res) => {});

  app.post("/save", (req, res) => {
    var {
      user,
      hp,
      maxHp,
      damage,
      defence,
      level,
      exp,
      expToLevel,
      gold,
    } = req.body;

    db.Status.create({
      user: user,
      hp: hp,
      maxHp: maxHp,
      damage: damage,
      defence: defence,
      level: level,
      exp: exp,
      expToLevel: expToLevel,
      gold: gold,
    }).then((resp) => {
      res.send(resp);
    });
  });
};
