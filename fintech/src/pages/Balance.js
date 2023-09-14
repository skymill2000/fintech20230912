import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";

const Balance = () => {
  useEffect(() => {
    getBalance();
  }, []);
  const getBalance = () => {
    //잔액조회 리퀘스트 작성하기
  };

  function generateRandom9DigitNumber() {
    const min = 100000000; // Minimum value (smallest 9-digit number)
    const max = 999999999; // Maximum value (largest 9-digit number)

    const random9DigitNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;
    return random9DigitNumber.toString();
  }

  const genTrasId = () => {
    return "M202300440U" + generateRandom9DigitNumber();
  };

  return (
    <div>
      <HeaderComponent title={"잔액조회 / 거래내역"}></HeaderComponent>
    </div>
  );
};

export default Balance;
