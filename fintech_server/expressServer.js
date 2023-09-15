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

app.get("/authResult", (req, res) => {
  const authCode = req.query.code;
  let requestOption = {
    url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    data: {
      code: authCode,
      client_id: process.env.FINTECH_CLIENT_ID,
      client_secret: process.env.FINTECH_CLIENT_SECRET,
      redirect_uri: "http://localhost:4000/authResult",
      grant_type: "authorization_code",
    },
  };
  axios(requestOption).then(({ data }) => {
    if (data.rsp_code !== "O0001") {
      console.log(data);
    } else {
      console.log(data);
    }
  });
});

app.get("/account", auth, (req, res) => {
  let { userId } = req.decoded;
  console.log(req.decoded);
  const sql = "SELECT * FROM user WHERE user_id = ?";
  connection.query(sql, [userId], function (err, result) {
    console.log(result);
    const accesstoken = result[0].access_token;
    const userSeqNo = result[0].user_seq_no;
    console.log(accesstoken);
    const sendData = {
      user_seq_no: userSeqNo,
    };
    const option = {
      method: "GET",
      url: "https://testapi.openbanking.or.kr/v2.0/user/me",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accesstoken}`,
      },
      params: sendData,
    };
    axios(option).then(({ data }) => {
      res.json(data);
    });
  });
});

app.get("/balance", auth, (req, res) => {
  //계좌 잔액 가져오기 로직 작성
  let { userId } = req.decoded;
  let fintechUseNo = "120230044088951024139191";
  console.log(fintechUseNo);
  const sql = "SELECT * FROM user WHERE user_id = ?";
  connection.query(sql, [userId], function (err, result) {
    const accesstoken = result[0].access_token;
    let requestOption = {
      url: "https://testapi.openbanking.or.kr/v2.0/account/balance/fin_num",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization: `Bearer ${accesstoken}`,
      },
      params: {
        bank_tran_id: genTrasId(),
        fintech_use_num: fintechUseNo,
        tran_dtime: "20230914103600",
      },
    };

    console.log(requestOption);

    axios(requestOption).then((response) => {
      console.log(response.data);
      res.json(response.data);
    });
  });
});

function generateRandom9DigitNumber() {
  const min = 100000000; // Minimum value (smallest 9-digit number)
  const max = 999999999; // Maximum value (largest 9-digit number)

  const random9DigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return random9DigitNumber.toString();
}

const genTrasId = () => {
  return "M202300440U" + generateRandom9DigitNumber();
};

app.listen(process.env.PORT);
