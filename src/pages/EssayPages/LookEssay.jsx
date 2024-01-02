import React, { useState } from "react";
import styled from "styled-components";
import Heart from "../../img/Heart.png";

const TodayTopic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 3px solid #d5e4d8;
  width: 305px;
  height: 78px;
  margin: 111px 0 0 42px;
`;

const TodayTopicTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

const OverlappingBox = styled.div`
  position: absolute;
  top: 104px;
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
  padding: 2px 0 0 0;
`;

const TopicTextBox = styled.div`
  width: 305px;
  height: 700px;
  border-radius: 15px;
  background-color: #d5e4d8;
  margin: 26px 0 0 42px;
`;
const TopicTitle = styled.input`
  border: none;
  border-bottom: 1px solid #6f6f6f;
  width: 254px;
  background-color: #d5e4d8;
  color: #000000;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  margin: 28px 0 0 26px;
`;

const TopicText = styled.input`
  border: none;
  background-color: #d5e4d8;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
  margin: 19px 0 0 29px;
  width: 250px;
  height: 480px;
  justify-content: flex-start;
`;

const BottomContainer = styled.div`
  position: fixed;
  margin: 766px 0 0 34px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;

const ScrapBtn = styled.button`
  width: 134px;
  height: 50px;
  border-radius: 10px;
  background-color: #3e864d;
`;

const CloseBtn = styled.button`
  width: 174px;
  height: 50px;
  border-radius: 10px;
  background-color: #a4a4a4;
`;

const Emoji = styled.button`
  position: absolute;
  top: 243px;
  left: 299px;
  border: none;
  background-color: #d5e4d8;
`;

const EmojiBox = styled.div`
  position: absolute;
  top: 210px;
  left: 300px;
  width: 88px;
  height: 28px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const EmojiButton = styled.button`
  position: relative;
  background-color: #fff;
  border-radius: 2000px;
  outline: none;
  border: none;
  width: 20px;
  height: 19px;
`;

export default function LookEssay() {
  const [isClicked, setIsCliked] = useState(false);
  const [selectEmoji, setSelectEmoji] = useState(Heart);
  const [isEmojiClicked, setIsEmojiClicked] = useState(false);

  const emojiList = ["😭", "🤬", "🤯", "🥰"];

  const handleClicked = () => {
    setIsCliked(!isClicked);
  };

  const handleEmoji = (emoji) => {
    if (emoji === "😭") {
      setSelectEmoji("😭");
    } else if (emoji === "🤬") {
      setSelectEmoji("🤬");
    } else if (emoji === "🤯") {
      setSelectEmoji("🤯");
    } else {
      setSelectEmoji("🥰");
    }
    setIsEmojiClicked(true);
    setIsCliked(!isClicked);
  };
  return (
    <div>
      <TodayTopic>
        <OverlappingBox>
          <OverlappingText>오늘의 토픽</OverlappingText>
        </OverlappingBox>
        <TodayTopicTitle>"오늘의 토픽 들어갈 자리"</TodayTopicTitle>
      </TodayTopic>
      <TopicTextBox>
        <Emoji>
          {isEmojiClicked ? (
            <div onClick={handleClicked}>{selectEmoji} </div>
          ) : (
            <img src={selectEmoji} onClick={handleClicked} alt="Emoji" />
          )}
        </Emoji>
        {isClicked && (
          <EmojiBox>
            {emojiList.map((emoji, index) => (
              <EmojiButton key={index} onClick={() => handleEmoji(emoji)}>
                {emoji}
              </EmojiButton>
            ))}
          </EmojiBox>
        )}
        <TopicTitle placeholder="제목 정하기" />
        <TopicText placeholder="자유롭게 오늘의 토픽에 대한 자신의 생각을 적어주세요"></TopicText>
      </TopicTextBox>
      <BottomContainer>
        <ScrapBtn>스크랩 하기</ScrapBtn>
        <CloseBtn>닫기</CloseBtn>
      </BottomContainer>
    </div>
  );
}
