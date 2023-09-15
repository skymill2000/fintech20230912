const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT);
