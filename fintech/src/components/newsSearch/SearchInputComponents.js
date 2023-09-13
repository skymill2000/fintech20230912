import React from "react";

const SearchInputComponents = ({ handleChange, handleClick }) => {
  return (
    <div>
      <div>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>전송</button>
      </div>
    </div>
  );
};

export default SearchInputComponents;
