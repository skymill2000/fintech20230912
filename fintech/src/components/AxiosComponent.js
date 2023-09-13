import React from "react";
import axios from "axios";

const AxiosComponent = () => {
  const handleClick = () => {
    axios.get("https://naver.com").then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>요청 생성</button>
    </div>
  );
};

export default AxiosComponent;
