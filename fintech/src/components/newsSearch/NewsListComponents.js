import React from "react";

const NewsListComponents = ({ newsList }) => {
  return (
    <div>
      {newsList.map((news) => {
        return <>{news.title}</>;
      })}
    </div>
  );
};

export default NewsListComponents;
