import React from "react";
import styled from "styled-components";
import profileImg from "../../img/Profile.jpg";

const MyProfileWrap = styled.div`
  margin-top: 103px;
  align-items: center;
  justify-content: center;
  text-align: center;
  > img {
    border-radius: 90px;
    width: 80px;
    height: 80px;
  }
  > p {
    margin-top: 20px;
  }
`;
export default function Myprofile() {
  return (
    <MyProfileWrap>
      <img src={profileImg} alt="프로필 이미지" />
      <p>닉네임</p>
    </MyProfileWrap>
  );
}
