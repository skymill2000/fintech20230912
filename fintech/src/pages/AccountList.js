import React, { useEffect } from "react";
import MainAccountCard from "../components/list/MainAccountCard";

const AccountList = () => {
  useEffect(() => {
    console.log("data");
  }, []);

  const getAccountList = () => {};

  return (
    <div>
      <MainAccountCard></MainAccountCard>
    </div>
  );
};

export default AccountList;
