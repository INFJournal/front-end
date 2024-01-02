import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import MainHeader from "../components/HeaderList/MainHeader";
import LetterImg from "../img/Letter.png";
import BackImg from "../img/BackImg.png";
import HumanImg from "../img/TopicImg.png";
import axios from "axios";

const Main = styled.div`
  margin: 61px 0 0 42px;
  color: #000;
  font-family: Pretendard;
  overflow: hidden;
`;
const MainTopic = styled.div`
  margin-bottom: 20px;
  font-weight: 800;
  font-size: 24px;
`;
const Topics = styled.div`
  margin: 20px 0 0 0;
`;

const TopicBox = styled.button`
  width: 302px;
  height: 124px;
  margin: 15px 0 0 0;
  text-align: left;
  border-radius: 15px;
  border: 0px;
  background-color: #d5e4d8;
`;

const TopicText = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-left: 29px;
  font-family: Pretendard;
  font-weight: 700px;
`;

const TopicImg = styled.img`
  position: absolute;
  margin: 10px 0 0 36px;
`;

const UnderBox = styled.div`
  margin: 15px 0 0 0;
  font-family: Pretendard;
`;

const UnderText = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: 800;
  top: 580px;
  left: 48px;
`;

const TodayTopicBoxes = styled.div`
  position: absolute;
  display: flex;
  top: 630px;
  left: 80px;
  flex-direction: row;
  overflow-x: scroll; // 가로 스크롤을 숨김
`;
const TodayTopicBox = styled.div`
  width: 130px;
  height: 167px;
  border-radius: 15px;
  border: 3px solid #d5e4d8;
  background-color: #fff;
  margin: 0 0 0 10px;
`;

const TodayTopicTitle = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 700;
  margin: 38px 0 0 13px;
  width: 74px;
  height: 34px;
`;
const TodayTopicImg = styled.img`
  width: 49.691px;
  height: 58.83px;
  margin: 6px 0 0 70px;
`;

const TodayTopicName = styled.div`
  font-size: 10px;
  font-weight: 500;
  margin: 0px 0 0 70px;
`;

export default function Topic() {
  const [isTopicDone, setIsTopicDone] = useState(false);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;

  //API 연동
  const [data, setData] = useState([]);
  const [contents, setContents] = useState();
  const [isWritten, setIsWritten] = useState();
  const userId = localStorage.getItem("userId");

  const todayTopicData = [
    { title: "스스로 의식하지 못하는 행복이 가능한가", image: HumanImg },
    { title: "지금의 나는 내 과거의 총합인가", image: HumanImg },
  ];
  useEffect(() => {
    // API 엔드포인트를 apiUrl 변수로 교체
    const apiEndpoint = `${apiUrl}/api/topics/today`;
    axios
      .get(apiEndpoint, {
        headers: {
          Authorization: userId,
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data.result);
        setContents(response.data.result.contents);
        setIsWritten(response.data.result.isWritten);
      })
      .catch((error) => {
        console.error("데이터 가져오기 오류:", error);
      });
  }, [userId, apiUrl]);

  const navigate = useNavigate();
  const ClickTopicButton = () => {
    if (isWritten) {
      navigate("/essaylist", { state: { data } });
    } else {
      navigate("/feelingchoice", { state: { data } });
    }
  };
  const ClickButton = () => {
    navigate("/openessay");
  };

  return (
    <>
      <MainHeader />
      <Main>
        <MainTopic>
          인프제님, <br />
          오늘의 토픽을 보러갈까요?
        </MainTopic>
        <Topics>
          <TopicBox onClick={ClickTopicButton}>
            {isWritten ? (
              <TopicText>
                "오늘의 토픽을 이미 작성하셨네요
                <br />
                리스트를 보러갈까요?"
              </TopicText>
            ) : (
              <TopicText>{contents}</TopicText>
            )}
          </TopicBox>
          <TopicBox style={{ backgroundColor: "#A0B2A4", height: "86px" }}>
            <TopicText style={{ marginTop: "-20px" }} onClick={ClickButton}>
              랜덤 우체통 보기
            </TopicText>
            <TopicImg src={LetterImg} />
          </TopicBox>
        </Topics>
      </Main>
      <UnderBox>
        <img src={BackImg} alt="BackImg" />
        <UnderText>최근 동록된 우체통</UnderText>
        <TodayTopicBoxes>
          {todayTopicData.map((topic) => (
            <TodayTopicBox>
              <TodayTopicTitle>{topic.title}</TodayTopicTitle>
              <TodayTopicImg src={topic.image} />
            </TodayTopicBox>
          ))}
        </TodayTopicBoxes>
      </UnderBox>
    </>
  );
}
