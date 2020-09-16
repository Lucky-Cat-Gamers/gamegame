const express = require("express");
const path = require("path");
const session = require("express-session");
require("dotenv").config();

const PORT = process.env.PORT || 8081;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    name: "sid",
    saveUninitialized: false,
    resave: false,
    secret: process.env.SECRET,
    cookie: {
      maxAge: 28800000,
      sameSite: true,
    },
  })
);

require("./routes/apiRoutes")(app);

// Testing base backend
app.get("/test", (req, res) => {
  res.send("Works");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
