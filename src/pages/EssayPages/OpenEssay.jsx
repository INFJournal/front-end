import React from "react";
import styled from "styled-components";
import imageBook from "../../img/book.png";
import { useNavigate } from "react-router-dom";
import MainHeader from "../../components/HeaderList/MainHeader";

const Main = styled.div`
  margin: 100px 0 0 42px;
  color: #000;
  font-size: 24px;
  font-weight: 800;
  font-family : Pretendard;
`;

const BookImg = styled.img`
  width: 240px;
  height: 149px;
  margin: 287px 0 0 115px;
`;
const OpenButton = styled.button`
  background-color: #3e864d;
  color: #fff;
  font-size: 15px;
  font-family : Pretendard;
  font-weight: 700;
  width: 320px;
  height: 50px;
  border-radius: 10px;
  border: 0px;
  margin: 40px 0 0 35px;
`;

export default function OpenEssay() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/lookessay");
  };

  return (
    <div>
      <MainHeader/>
      <Main>
        인프제님,
        <br />
        오늘의 에세이를 열어보세요.
      </Main>
      <BookImg src={imageBook} />
      <OpenButton onClick={handleClick}>열어보기</OpenButton>
    </div>
  );
}
