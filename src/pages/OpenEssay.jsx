import React from "react";
import styled from "styled-components";
import imageBook from './pics/book.png';

const Main = styled.div`
  margin: 211px 0 0 42px;
  color: #000;
  font-size : 24px;
  font-weight: 800;
`;

const BookImg = styled.img`
    width: 240px;
    height: 149px;
    margin : 287px 0 0 115px;
`
const OpenButton = styled.button`
    background-color: #3E864D;
    color: #FFF;
    font-size: 15px;
    font-weight: 700;
    width: 320px;
    height: 50px;
    border-radius: 10px;
    border : 0px;
    margin : 40px 0 0 35px;
`

export default function OpenEssay() {
  return (
    <div>    
        <Main>
            인프제님,<br/>
            오늘의 에세이를 열어보세요.
        </Main>
        <BookImg src={imageBook}/>
        <OpenButton>열어보기</OpenButton>
    </div>
  );
}
