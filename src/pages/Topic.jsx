import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  margin: 159px 0 0 42px;
  color: #000;
`;
const MainTopic = styled.div`
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 24px;
`;
const Topics = styled.div`
  margin : 20px 0 0 0;
`;

const TopicBox = styled.button`
  width: 302px;
  height: 124px;
  margin: 15px 0 0 0;
  text-align: left;
  border-radius: 15px;
  border : 0px;
  background-color : #D5E4D8;


`;

const TopicText = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-left : 25px;
`;

export default function Topic() {
    const navigate=useNavigate();
    const ClickButton =()=>{
        navigate("/openessay");
    }

  return (
    <Main>
      <MainTopic>
        인프제님, <br />
        오늘의 토픽을 보러갈까요?
      </MainTopic>
      <Topics>
        <TopicBox>
            <TopicText>오늘의 토픽</TopicText>
        </TopicBox>
        <TopicBox style={{backgroundColor : "#A0B2A4"}}>
            <TopicText onClick={ClickButton}>랜덤 우체통 보기</TopicText>
        </TopicBox>
      </Topics>
    </Main>
  );
}
