import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/INFJournal.png";
import styled from "styled-components";
import profileImg from "../../img/Profile.jpg";

const MainBackHeaderWrap = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  position: reletive;
  padding: 10px; /* 조절 가능한 패딩 값 */
`;

const Logo = styled.div`
  margin-top: 74px;
`;

const Profile = styled.div`
  position: absolute;
  top: 83px;
  right: 38px;
  height: 16px;
  weight: 8px;
  > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export default function MainHeader() {
  return (
    <MainBackHeaderWrap>
      <Logo>
        <Link to="/">
          <img
            src={logo}
            style={{ width: "80px", height: "24px" }}
            alt="로고"
          />
        </Link>
      </Logo>
      <Profile>
        <img src={profileImg} alt="프로필 이미지" />
      </Profile>
    </MainBackHeaderWrap>
  );
}
