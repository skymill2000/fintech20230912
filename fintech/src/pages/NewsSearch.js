import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import SearchInputComponents from "../components/newsSearch/SearchInputComponents";
import NewsListComponents from "../components/newsSearch/NewsListComponents";

const NewsSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);
  };
  const handleClick = () => {
    console.log("hello");
    // axios 요청 작성하기
  };

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <SearchInputComponents
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInputComponents>
      <NewsListComponents></NewsListComponents>
    </div>
  );
};

export default NewsSearch;
