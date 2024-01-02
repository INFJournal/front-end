import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import MainHeader from "../components/HeaderList/MainHeader";
import LetterImg from "../img/Letter.png";
import BackImg from "../img/BackImg.png";
import HumanImg from "../img/TopicImg.png";
import axios from 'axios';

const Main = styled.div`
  margin: 113px 0 0 42px;
  color: #000;
  font-family: Pretendard;
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
  margin: 38px 0 0 0;
  font-family: Pretendard;
`;

const UnderText = styled.div`
  position: absolute;
  font-size: 16px;
  font-weight: 800;
  top: 655px;
  left: 48px;
`;
const slideAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
const TodayTopicBoxes = styled.div`
  position: absolute;
  display: flex;
  top: 700px;
  left: 42px;
  flex-direction: row;
  overflow-x: scroll; // 가로 스크롤을 숨김
  animation: ${slideAnimation} 1s ease; // 1초 동안 slideAnimation 적용
`;
const TodayTopicBox = styled.div`
  width: 130px;
  height: 167px;
  border-radius: 15px;
  border: 3px solid #d5e4d8;
  background-color: #fff;
  margin: 0 0 0 6px;
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
  const scrollRef = useRef(null);

  //API 연동
  const [data, setData] = useState(null);
  const [dataContents, setDataContents] = useState();
  useEffect(() => {
    // API 엔드포인트를 실제 엔드포인트로 교체
    const apiEndpoint = `http://10.10.140.49:8080/api/topics/today`;
    axios
      .get(apiEndpoint, {
        headers: {
          Authorization: 4
        }
      })
      .then((response) => {
        console.log(response);
        setData(response.data.result);
        setIsTopicDone(response.data.result.isWritten);
        setDataContents(response.data.result.contents);
      })
      .catch((error) => {
        console.error("데이터 가져오기 오류:", error);
      });
  }, []);


  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
     scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };
  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);


  const navigate = useNavigate();
  const ClickTopicButton = () => {
    if (isTopicDone) {
      navigate("/essaylist",{ state: { data } });
    } else {
      navigate("/feelingchoice",{ state: { data } });
    }
  };
  const ClickButton = () => {
    navigate("/openessay");
  };

  const handleTopicBox =()=> {
    navigate("/essayrandomlist")
  }
  const todayTopicData = [
    { title: dataContents, image: HumanImg, author: "Xingu" },
    { title: dataContents, image: HumanImg, author: "Jenn" },
    { title: dataContents, image: HumanImg, author: "ioeemg" },
  ];
  
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
            {isTopicDone ? (
              <TopicText>"오늘의 토픽을 이미 작성하셨네요
              <br />
              리스트를 보러갈까요?"</TopicText>
            ) : (
              <TopicText>
                "오늘의 토픽"
              </TopicText>
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
        <TodayTopicBoxes
      onMouseDown={onDragStart}
      onMouseMove={onThrottleDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}
        >
          {todayTopicData.map((topic, index) => (
            <TodayTopicBox onClick={handleTopicBox} key={index}>
              <TodayTopicTitle>{topic.title}</TodayTopicTitle>
              <TodayTopicImg src={topic.image} />
              <TodayTopicName>by {topic.author}</TodayTopicName>
            </TodayTopicBox>
          ))}
        </TodayTopicBoxes>
      </UnderBox>
    </>
  );
}
