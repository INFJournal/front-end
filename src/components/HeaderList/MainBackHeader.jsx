import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../img/INFJournal.png";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import profileImg from "../../img/Profile.jpg";

const MainBackHeaderWrap = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  position: reletive;
  padding: 10px; /* 조절 가능한 패딩 값 */
`;

const Back = styled.div`
  position: absolute;
  top: 83px;
  left: 38px;
  height: 16px;
  weight: 8px;
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

export default function MainBackHeader() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };
  return (
    <MainBackHeaderWrap>
      <Back onClick={handleGoBack}>
        <span>
          <IoIosArrowBack size="23" color="black" />
        </span>
      </Back>
      <Logo>
        <Link to="/">
          <img
            src={logo}
            style={{ width: "80px", height: "24px" }}
            alt="로고"
          />
        </Link>
      </Logo>
      <Link to="/myprofile" style={{ textDecoration: "none" }}>
        <Profile>
          <img src={profileImg} alt="프로필 이미지" />
        </Profile>
      </Link>
    </MainBackHeaderWrap>
  );
}
