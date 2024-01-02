import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ResiterShowWrap = styled.div`
  margin-left: 115px;
  margin-top: 103px;
  > p {
    margin-top: 20px;
  }
`;

const RegisterBtn = styled.div`
  background-color: #3e864d;
  border-radius: 90px;
  margin-left: 43px;
  width: 80px;
  height: 80px;
  > p {
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 30px;
  }
`;
export default function RegisterShow() {
  return (
    <ResiterShowWrap>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <RegisterBtn>
          <p>+</p>
        </RegisterBtn>
      </Link>
      <p>닉네임을 등록해주세요</p>
    </ResiterShowWrap>
  );
}
