import React, { useEffect, useState } from "react";
import MainAccountCard from "../components/list/MainAccountCard";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";

const AccountList = () => {
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    console.log("data");
    getAccountList();
  }, []);

  const getAccountList = () => {
    const ourtoken = localStorage.getItem("ourtoken");
    let requestOption = {
      url: "/account",
      method: "GET",
      headers: {
        ourtoken: ourtoken,
      },
    };

    axios(requestOption).then((response) => {
      console.log(response);
      setAccountList(response.data.res_list);
    });
  };

  return (
    <div>
      <HeaderComponent title={"계좌조회"}></HeaderComponent>
      {accountList.map((account) => {
        return (
          <MainAccountCard
            key={account.fintech_use_num}
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
          ></MainAccountCard>
        );
      })}
    </div>
  );
};

export default AccountList;
