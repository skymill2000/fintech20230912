const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2");
var jwt = require("jsonwebtoken");
const crypto = require("crypto");
const auth = require("./lib/auth");
const axios = require("axios");
const app = express();

dotenv.config();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_ACCOUNT,
  password: process.env.DB_PASSWORD,
  database: "fintech",
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", auth, function (req, res) {
  console.log(req.decoded);
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("hello");
});

app.post("/login", (req, res) => {
  const { userAccount, password } = req.body;
  const sql =
    "SELECT user_id, user_account, user_password FROM fintech.user WHERE user_account = ?";
  connection.query(sql, [userAccount], (err, result) => {
    if (err) throw err;
    console.log(result);
    let encPassword = sha256Enc(password, "fintech");
    if (encPassword === result[0].user_password) {
      let tokenKey = "f@i#n%tne#ckfhlafkd0102test!@#%";
      jwt.sign(
        {
          userId: result[0].user_id,
          userEmail: result[0].user_account,
        },
        tokenKey,
        {
          expiresIn: "10d",
          issuer: "fintech.admin",
          subject: "user.login.info",
        },
        function (err, token) {
          if (err) {
            console.error(err);
          }
          console.log("로그인 성공", token);
          res.json(token);
        }
      );
    } else {
      res.json("비밀번호 다릅니다.");
    }
  });
});

const sha256Enc = (plainText, key) => {
  const secret = key;
  const hash = crypto
    .createHmac("sha256", secret)
    .update(plainText)
    .digest("base64");
  return hash;
};

app.get("/authResult", auth, (req, res) => {
  const authCode = req.query.code;
});

app.listen(process.env.PORT);
