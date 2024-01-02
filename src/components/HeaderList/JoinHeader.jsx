import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/barcode.svg";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

const JoinHeaderWrap = styled.div`
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

export default function JoinHeader() {
  return (
    <JoinHeaderWrap>
      <Back>
        <span>
          <IoIosArrowBack size="23" color="white" />
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
    </JoinHeaderWrap>
  );
}
