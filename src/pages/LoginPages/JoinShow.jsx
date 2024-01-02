import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #3e864d;
  }
`;

const ResiterShowWrap = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 132px;
  > p {
    margin-top: 20px;
  }
`;

const RegisterBtn = styled.div`
  background-color: white;
  border-radius: 90px;
  width: 80px;
  height: 80px;
  margin-left: 155px;
  > p {
    color: #3e864d;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 30px;
    font-weight: bolder;
  }
`;
export default function JoinShow() {
  return (
    <ResiterShowWrap>
      <GlobalStyle />
      <Link to="/join" style={{ textDecoration: "none" }}>
        <RegisterBtn>
          <p>+</p>
        </RegisterBtn>
      </Link>
      <p style={{ color: "white" }}>닉네임을 등록해주세요</p>
    </ResiterShowWrap>
  );
}
