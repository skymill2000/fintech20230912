import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const AuthResult = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const code = parsed.code;

  const handleClick = () => {
    let requestOption = {
      //메뉴얼보고작성
      url: "",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: {},
    };
    axios(option).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <HeaderComponent title={"토큰 발급 / 인증"} />
      <p>사용자 인증 코드 : {code}</p>
      <button onClick={handleClick}>토큰 발급하기</button>
    </div>
  );
};

export default AuthResult;
