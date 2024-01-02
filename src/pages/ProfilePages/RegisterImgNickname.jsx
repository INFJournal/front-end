import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ResiterWrap = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 318px;
  > p {
    margin-top: 20px;
  }
`;

const RegisterBtn = styled.div`
  background-color: #3e864d;
  border-radius: 90px;
  width: 80px;
  height: 80px;
  margin-left: 155px;
  > p {
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 30px;
  }
`;

const StyledInput = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  > input {
    border: 1px solid #ccc;
    border-radius: 30px;
    padding: 10px;
    margin-top: 10px;
  }
`;
export default function RegisterImgNickname() {
  const [nickname, setNickname] = useState("");

  const onChangeNickname = (event) => {
    const Nickname = event.target.value;
    setNickname(Nickname);
    console.log(Nickname);
  };

  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      // Enter 키를 누르면 API 통신되게 코드 구현
      //localStorage.setItem("nickname", nickname);
    }
  };
  return (
    <ResiterWrap>
      <RegisterBtn>
        <p>+</p>
      </RegisterBtn>
      <p>프로필 이미지와 닉네임을 등록해주세요.</p>
      <StyledInput>
        <input
          type="text"
          placeholder="닉네임 입력"
          value={nickname}
          onChange={onChangeNickname}
          onkeydown={onEnterPress}
        />
      </StyledInput>
    </ResiterWrap>
  );
}
