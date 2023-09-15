import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import axios from "axios";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import BalanceCard from "../components/balance/BalanceCard";
import TransactionList from "../components/balance/TransactionList";

const Balance = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechNo = parsed.fintechUseNo;

  const [balance, setBalance] = useState("0");
  const [trasactionList, setTrasactionList] = useState([]);
  useEffect(() => {
    getBalance();
    getTransactionList();
  }, []);
  const getBalance = () => {
    const ourToken = localStorage.getItem("ourtoken");
    let requestOption = {
      url: "/balance",
      method: "GET",
      headers: {
        ourtoken: ourToken,
      },
      params: {
        fintechUseNo: fintechNo,
      },
    };
    axios(requestOption).then((response) => {
      console.log(response);
      setBalance(response.data);
    });
  };

  const getTransactionList = () => {};

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
      <BalanceCard
        bankName={balance.bank_name}
        fintechNo={fintechNo}
        balance={balance.balance_amt}
      ></BalanceCard>
      <TransactionList transactionList={trasactionList}></TransactionList>
    </div>
  );
};

export default Balance;
