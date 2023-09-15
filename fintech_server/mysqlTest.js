const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ACCOUNT,
  database: process.env.DB_PASSWORD,
});

// simple query
connection.query(
  'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
  ["Page", 45],
  function (err, results) {
    console.log(results);
  }
);
