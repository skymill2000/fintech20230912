import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import SearchInputComponents from "../components/newsSearch/SearchInputComponents";
import NewsListComponents from "../components/newsSearch/NewsListComponents";
import axios from "axios";

const NewsSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [newsList, setNewsList] = useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    setSearchValue(value);
  };
  const handleClick = () => {
    console.log("hello");
    // axios 요청 작성하기
    const apiKey = "";
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchValue}&from=2023-08-13&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => {
        console.log(response);
        setNewsList(response.data.articles);
      });
  };

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <SearchInputComponents
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInputComponents>
      <NewsListComponents newsList={newsList}></NewsListComponents>
    </div>
  );
};

export default NewsSearch;
