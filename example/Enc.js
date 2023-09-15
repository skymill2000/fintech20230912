const crypto = require("crypto");

const sha256Enc = (plainText, key) => {
  const secret = key;
  const hash = crypto
    .createHmac("sha256", secret)
    .update(plainText)
    .digest("base64");
  return hash;
};

const AESEncrypt = (plainTxt) => {
  const algorithm = "aes-256-cbc";
  const key = "H3uVnnOnNIXXsH63CsgswUsmICSCdVsn";
  const iv = "dwUgwmwOndnJOmOX";
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(plainTxt, "utf8", "base64");
  encrypted += cipher.final("base64");
  console.log(encrypted);
  return encrypted;
};

const AESDecrypt = (plainTxt) => {
  const algorithm = "aes-256-cbc";
  const key = "H3uVnnOnNIXXsH63CsgswUsmICSCdVsn";
  const iv = "dwUgwmwOndnJOmOX";
  const cipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = cipher.update(plainTxt, "base64", "utf8");
  decrypted += cipher.final("utf-8");
  console.log(decrypted);
};

AESEncrypt("!Kwic123테스트");
AESDecrypt("b3Bu7QBZ0q96+f2GY2NQmaT1XnZElI1+wRdSHBOY01s=");
