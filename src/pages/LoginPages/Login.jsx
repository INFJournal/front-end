import React, { useState } from "react";
import logo from "../../img/barcode.svg";
import styled, { createGlobalStyle } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../../components/animation/Wrapper";

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #3e864d;
  }
`;

const LoginWrap = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 289px;
  > p {
    margin-top: 20px;
  }
  > img {
    margin-top: 47px;
  }
`;
const StyledInput = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  > input {
    border: 1px solid white;
    background-color: #3e864d;
    width: 254px;
    height: 44px;
    border-radius: 30px;
    padding-left: 20px;
    margin-top: 10px;
    outline: none;
    color: white;
    &::placeholder {
      color: white;
    }
  }
`;
export default function Login() {
  const [nickname, setNickname] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const onChangeNickname = (event) => {
    const Nickname = event.target.value;
    setNickname(Nickname);
    console.log(Nickname);
  };

  const onEnterPress = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.post(`${apiUrl}/api/sign-in`, {
          nickname: nickname,
        });

        // 서버 응답 확인
        console.log("Server response:", response.data);

        // userId 추출
        const userId = response.data.result.userId;

        // userId를 로컬 스토리지에 저장
        localStorage.setItem("userId", userId);

        // 로그인 성공 후 페이지 이동
        navigate("/topic");
      } catch (error) {
        console.error("Error during API call:", error);
        alert("존재하지 않는 닉네임입니다.");
      }
    }
  };

  return (
    <Wrapper>
      <img
        src={logo}
        style={{ marginTop: "47px", marginLeft: "129px" }}
        alt="로고"
      />
      <LoginWrap>
        <GlobalStyle />

        <StyledInput>
          <input
            type="text"
            value={nickname}
            placeholder="닉네임을 입력하세요"
            onChange={onChangeNickname}
            onKeyDown={onEnterPress}
          />
        </StyledInput>
        <Link to="/joinshow" style={{ textDecoration: "none" }}>
          <p style={{ color: "white", marginTop: "15px", fontSize: "14px" }}>
            회원가입
          </p>
        </Link>
      </LoginWrap>
    </Wrapper>
  );
}
