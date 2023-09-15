import React, { useState } from "react";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeId = (e) => {
    setId(e.target.value);
  };
  const handleChangePassword = (e) => {
    // setUserInfo(...userInfo, {
    //   password: e.target.value,
    // });
    setPassword(e.target.value);
  };
  const handleClick = () => {
    console.log(id, password);
    let option = {
      url: "/login",
      method: "POST",
      data: {
        userAccount: id,
        password: password,
      },
    };
    axios(option).then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <HeaderComponent title={"로그인"}></HeaderComponent>
      <div>
        id : <input onChange={handleChangeId}></input>
        password :{" "}
        <input type="password" onChange={handleChangePassword}></input>
        <button onClick={handleClick}>검색</button>
      </div>
    </div>
  );
};

export default Login;
