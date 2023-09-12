import React from "react";
import styled from "styled-components";

// styled-components로 헤더 스타일링
const StyledHeader = styled.header`
  background-color: #282c34;
  height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Nav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 20px;

    li {
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const HeaderComponent = () => {
  return (
    <StyledHeader>
      <Logo>MyApp</Logo>
      <Nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default HeaderComponent;
