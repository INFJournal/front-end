import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

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
  margin-top: 289px;

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

    console.log("업로드");
  };

  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      //닉네임, 프로필 사진 전송
    }
  };
  return (
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
  );
}
