import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../../components/HeaderList/JoinHeader";
import axios from "axios";

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #3e864d;
  }
`;

const ResiterWrap = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 200px;

  > p {
    margin-top: 20px;
  }
`;

const RegisterBtn = styled.label`
  background-color: white;
  border-radius: 90px;
  width: 80px;
  height: 80px;
  margin-left: 155px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > p {
    color: #3e864d;
    font-weight: bolder;
  }

  > input {
    display: none; /* 기본 파일 업로드 버튼 숨김 */
  }

  > img {
    border-radius: 90px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

const StyledInput = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  > input {
    border: 1px solid #ccc;
    background-color: #3e864d;
    border-radius: 30px;
    padding: 10px;
    margin-top: 10px;
    outline: none;
    color: white;
  }
`;

export default function Join() {
  const [nickname, setNickname] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  const onChangeNickname = (event) => {
    const Nickname = event.target.value;
    setNickname(Nickname);
    console.log(Nickname);
  };
  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  const onEnterPress = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.post(`${apiUrl}/api/sign-up`, {
          nickname: nickname,
        });

        console.log("Server response:", response.data);
        // userId 추출
        const userId = response.data.result.userId;

        // userId를 로컬 스토리지에 저장
        localStorage.setItem("userId", userId);
      } catch (error) {
        console.error("Error during API call:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <ResiterWrap>
        <GlobalStyle />

        <RegisterBtn>
          {imageUrl ? <img src={imageUrl} alt="프로필 이미지" /> : <p>+</p>}
          <input type="file" onChange={onFileChange} accept="image/*" />
        </RegisterBtn>
        <p style={{ color: "white" }}>프로필 이미지와 닉네임을 등록해주세요.</p>
        <StyledInput>
          <input
            type="text"
            value={nickname}
            onChange={onChangeNickname}
            onKeyDown={onEnterPress}
          />
        </StyledInput>
      </ResiterWrap>
    </>
  );
}
