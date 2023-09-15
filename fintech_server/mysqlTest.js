const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ACCOUNT,
  password: process.env.DB_PASSWORD,
  database: "fintech",
});

// simple query
connection.query("SELECT * FROM user", function (err, results, fields) {
  console.log(err);
  console.log(results); // results contains rows returned by server
  console.log(fields); // fields contains extra meta data about results, if available
});
