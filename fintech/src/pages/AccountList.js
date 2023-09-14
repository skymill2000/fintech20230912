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
    let requestOption = {
      url: "/v2.0/user/me",
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIxMTAwMDM0NzM2Iiwic2NvcGUiOlsiaW5xdWlyeSIsImxvZ2luIiwidHJhbnNmZXIiXSwiaXNzIjoiaHR0cHM6Ly93d3cub3BlbmJhbmtpbmcub3Iua3IiLCJleHAiOjE3MDIzNjI5MzIsImp0aSI6IjZkYThhM2U3LWViNTEtNDk5My1hNGQ1LThhYTQ4MGRkYzEzYiJ9.szHUUj8K8vmJvbfI_g1-2vGlOA20dAK9GyygP7-DPwc",
      },
      params: {
        user_seq_no: "1100034736",
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
