import React, { useState, useEffect } from "react";
import styled from "styled-components";

import MainBackHeader from "../../components/HeaderList/MainBackHeader";

import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Main = styled.div`
  position: relative;
  font-family: Pretendard;
`;
const TodayTopic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 3px solid #d5e4d8;
  width: 305px;
  height: 78px;
  margin: 52px 0 0 42px;
`;

const TodayTopicTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

const OverlappingBox = styled.div`
  position: absolute;
  top: 165px;
  width: 78px;
  height: 22px;
  border-radius: 10px;
  background-color: #3e864d;
`;
const OverlappingText = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  padding: 3.5px 0 0 0;
`;

const TopicTextBox = styled.div`
  width: 343px;
  height: 633px;
  border-radius: 15px;
  background-color: #d5e4d8;
  margin: 19px 0 0 23px;
`;
const TopicTitle = styled.input`
  border: none;
  width: 254px;
  background-color: #d5e4d8;
  color: #000000;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  margin: 28px 0 0 45px;
  &::placeholder {
    color: #000;
  }
`;
const BorderLine = styled.div`
  border-bottom: 1px solid #6f6f6f;
  margin: 9px 0 0 45px;
  width: 254px;
`;

const TopicText = styled.textarea`
  border: none;
  display: flex;
  background-color: #d5e4d8;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
  margin: 19px 0 0 45px;
  width: 254px;
  height: 480px;
`;

const SaveBtn = styled.button`
  position: fixed;
  bottom: 28px;
  left: 34px;
  width: 320px;
  height: 50px;
  border-radius: 10px;
  background-color: #3e864d;
  font-weight: 700;
  color: #fff;
  font-family: Pretendard;
  font-size: 15px;
  text-align: center;
  border: none;
`;
const ShowAv = styled.div`
  position: relative;
  display: flex;
  margin: 10px 0 100px 281px;
  color: #000;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
`;

const ShowBtn = styled.div`
  width: 33px;
  height: 18px;
  border-radius: 20px;
  border: 1px solid #a0b2a4;
  background-color: #fff;
  margin: -2px 0 0 10px;
`;
const ShowCircleBefore = styled.div`
  position: absolute;
  top: 1px;
  left: 47px;
  width: 14px;
  height: 14px;
  background-color: #a0b2a4;
  border-radius: 20px;
`;

const ShowCircleAfter = styled.div`
  position: absolute;
  top: 1px;
  left: 62px;
  width: 14px;
  height: 14px;
  background-color: #3e864d;
  border-radius: 20px;
`;

export default function WriteEssay() {
  const [textValue, setTextValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [showAvBtn, setShowAvBtn] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    console.log("selectedFeeling:", state);
  });

  const onTextInput = (e) => {
    setTextValue(e.target.value);
    console.log(e.target.value);
  };

  const onTitleInput = (e) => {
    setTitleValue(e.target.value);
    console.log(e.target.value);
  };
  const handleMove = () => {
    setShowAvBtn(!showAvBtn);
  };

  const handleSave = () => {
    // 서버로 데이터를 보내고 응답을 처리합니다.
    axios
      .post(
        `${apiUrl}/api/essays`,
        {
          mood: state.selectedFeeling,
          topicId: state.topicId,
          title: titleValue,
          contents: textValue,
        },
        {
          headers: {
            Authorization: 4,
          },
        }
      )
      .then((response) => {
        // 서버에서의 응답을 확인하고 필요에 따라 처리합니다.
        console.log(response.data);

        // 에세이 목록 페이지로 이동합니다.
        navigate("/essaylist");
      })
      .catch((error) => {
        // 오류가 발생한 경우 처리합니다.
        console.error("Error:", error);
      });
  };

  return (
    <Main>
      <MainBackHeader />
      <TodayTopic>
        <OverlappingBox>
          <OverlappingText>오늘의 토픽</OverlappingText>
        </OverlappingBox>
        <TodayTopicTitle>"오늘의 토픽 들어갈 자리"</TodayTopicTitle>
      </TodayTopic>
      <TopicTextBox>
        <TopicTitle
          onBlur={onTitleInput}
          type="text"
          placeholder="제목 정하기"
        />
        <BorderLine />
        <TopicText
          onBlur={onTextInput}
          placeholder="자유롭게 오늘의 토픽에 대한 자신의 생각을 적어주세요"
        ></TopicText>
      </TopicTextBox>
      <ShowAv>
        공개여부
        <ShowBtn onClick={handleMove}></ShowBtn>
        {showAvBtn ? <ShowCircleBefore /> : <ShowCircleAfter />}
      </ShowAv>
      <SaveBtn onClick={handleSave}>저장하기</SaveBtn>
    </Main>
  );
}
