import React, { useState } from "react";

const ListComponent = () => {
  const [users, setUsers] = useState([
    { username: "홍길동", age: 12, major: "경영학" },
    { username: "고길동", age: 22, major: "회계학" },
    { username: "김길동", age: 32, major: "컴공" },
  ]);
  return <div></div>;
};

export default ListComponent;
