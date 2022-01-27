const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("./server/routes")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get(
  "/",
  (req, res) => res.sendFile(__dirname + "/public/index.html")
  // res.status(200).send({
  //   message: "Welcome to the beginning.",
  // })
);

module.exports = app;
