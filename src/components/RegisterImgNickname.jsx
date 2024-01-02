import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ResiterWrap = styled.div`
  margin-left: 115px;
  margin-top: 318px;
  > p {
    margin-top: 20px;
    margin-left: -60px;
  }
`;

const RegisterBtn = styled.div`
  background-color: #3e864d;
  border-radius: 90px;
  margin-left: 40px;
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

const StyledInput = styled.div`
  margin-left: -15px;
  margin-top: 10px;
  > input {
    border: 1px solid #ccc;
    border-radius: 30px;
    padding: 10px;
    margin-top: 10px;
  }
`;
export default function RegisterImgNickname() {
  return (
    <ResiterWrap>
      <RegisterBtn>
        <p>+</p>
      </RegisterBtn>

      <p>프로필 이미지와 닉네임을 등록해주세요.</p>
      <StyledInput>
        <input type="text" placeholder="닉네임 입력" />
      </StyledInput>
    </ResiterWrap>
  );
}
