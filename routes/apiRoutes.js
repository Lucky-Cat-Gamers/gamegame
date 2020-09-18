//require("dotenv").config();
const mongoose = require("mongoose");
const db = require("../models");
const session = require("express-session");

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
  app.post("/login", (req, res) => {
    req.session.name = req.body.name;

    res.send(req.session.name);
  });

  app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.redirect("/");
      }
      res.clearCookie("sid");
    });
  });

  app.get("/load", (req, res) => {
    var user = req.session.name;

    db.Scores.find()
      .then((resp) => {
        const tempArray = resp.sort((a, b) => {
          return b.level - a.level;
        });
        res.json(tempArray);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  app.post("/save", (req, res) => {
    var user = req.session.name;
    var { level, gold } = req.body;

    db.Scores.create({
      user: user,
      level: level,
      gold: gold,
    })
      .then((resp) => {
        res.send(resp);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
