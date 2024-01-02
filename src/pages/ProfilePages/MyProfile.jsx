import React from "react";
import styled from "styled-components";
import profileImg from "../../img/Profile.jpg";
import Header from "../../components/HeaderList/MainBackHeader";

const MyProfileWrap = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > img {
    border-radius: 50%; /* 반지름을 50%로 하여 이미지를 원형으로 만듭니다. */
    width: 80px;
    height: 80px;
  }

  > p {
    margin-top: 20px;
  }
`;

export default function Myprofile() {
  return (
    <>
      <Header />
      <MyProfileWrap>
        <img src={profileImg} alt="프로필 이미지" />
        <p>닉네임</p>
      </MyProfileWrap>
    </>
  );
}
