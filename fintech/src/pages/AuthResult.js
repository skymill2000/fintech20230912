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
      url: "/oauth/2.0/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      data: {
        code: code,
        client_id: "9c785a50-ac39-4dac-af61-eb82eb80e139",
        client_secret: "93b9698e-14a8-4462-9f76-6fe06e0250de",
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      },
    };
    axios(requestOption).then((response) => {
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
