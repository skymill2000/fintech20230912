import React from "react";
import styled from "styled-components";

const BodyBlock = styled.div`
  font-size: 30px;
  color: red;
  color: rgb(255, 255, 255);
  background-color: rgb(247, 193, 193);
  text-shadow: rgb(122, 122, 122) 4px 3px 0px;
  padding: 20px;
  maring: 10px;
`;

const StyledComponent = () => {
  return (
    <div>
      <BodyBlock>StyledComponent</BodyBlock>
    </div>
  );
};

export default StyledComponent;
