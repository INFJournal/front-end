import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heart from "../../img/Heart.png";
import UnScrapImg from "../../img/UnScrap.png";
import ScrapImg from "../../img/Scrap.png";
import { useNavigate } from "react-router-dom";
import MainBackHeader from "../../components/HeaderList/MainBackHeader";
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

const BorderLine = styled.div`
  border-bottom: 1px solid #6f6f6f;
  margin: 9px 0 0 45px;
  width: 254px;
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
  margin: 19px 0 100px 23px;
`;

const TopicTitle = styled.div`
  border: none;
  border-bottom: 0px solid #6f6f6f;
  width: 254px;
  background-color: #d5e4d8;
  color: #000000;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  margin: 28px 0 0 45px;
  padding: 31px 0 0 0;
`;

const TopicText = styled.div`
  border: none;
  display: flex;
  background-color: #d5e4d8;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
  margin: 19px 0 0 45px;
  width: 254px;
  height: 500px;
`;

const Writer = styled.div`
  color: #000;
  font-size: 10px;
  font-weight: 500;
  margin: 20px 0 0 252px;
  font-family: Pretendard;
`;

const Emoji = styled.button`
  position: absolute;
  top: 312px;
  left: 299px;
  border: none;
  background-color: #d5e4d8;
`;

const EmojiBox = styled.div`
  position: absolute;
  top: 274px;
  left: 297px;
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
  margin: 3px 0 0 1.5px;
  outline: none;
  border: none;
  width: 20px;
  height: 19px;
`;

const BottomContainer = styled.div`
  position: fixed;
  bottom: 28px;
  left: 34px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrapBtn = styled.button`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  width: 134px;
  height: 50px;
  border-radius: 10px;
  background-color: #3e864d;
  border: none;
`;

const CloseBtn = styled.button`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  width: 174px;
  height: 50px;
  border-radius: 10px;
  background-color: #a4a4a4;
  border: none;
  margin: 0 0 0 12px;
`;

const ScrapImgs = styled.img`
  margin: 0 11.68px -3px 0;
  width: 13.318px;
  height: 15.339px;
`;

export default function LookEssay() {
  const [isClicked, setIsCliked] = useState(false);
  const [selectEmoji, setSelectEmoji] = useState(Heart);
  const [isEmojiClicked, setIsEmojiClicked] = useState(false);
  const [isScrapClicked, setIsScrapClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const [topic, setTopic] = useState("");

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    // 페이지 최초 로드 시에만 데이터를 가져옴
    fetchData();
  }, []); // 빈 배열은 최초 로드 시에만 실행하도록 함

  const fetchData = () => {
    const apiEndpoint = "http://3.38.178.117/api/me/essays";
    axios
      .get(apiEndpoint, {
        headers: {
          Authorization: 4,
        },
      })
      .then((response) => {
        const essay = response.data.result[0]; // Assuming you want the first essay
        setData(response.data.result);
        setTitle(essay.title);
        setText(essay.contents);
        setTopic(essay.topic);
      })
      .catch((error) => {
        console.error("데이터 가져오기 오류:", error);
      });
  };

  const emojiList = ["😭", "🤬", "🫢", "🥰"];
  const navigate = useNavigate();
  const handleScrapClicked = () => {
    setIsScrapClicked(!isScrapClicked);
    if (!isScrapClicked) {
    } else {
    }
  };
  const handleEmojiClicked = () => {
    setIsCliked(!isClicked);
  };

  const handleEmoji = (emoji) => {
    if (emoji === "😭") {
      setSelectEmoji("😭");
    } else if (emoji === "🤬") {
      setSelectEmoji("🤬");
    } else if (emoji === "🫢") {
      setSelectEmoji("🫢");
    } else {
      setSelectEmoji("🥰");
    }
    setIsEmojiClicked(true);
    setIsCliked(!isClicked);
  };

  const handleClose = () => {
    navigate("/EssayRandomList", { state: { data } });
  };
  return (
    <Main>
      <MainBackHeader />
      <TodayTopic>
        <OverlappingBox>
          <OverlappingText>오늘의 토픽</OverlappingText>
        </OverlappingBox>
        <TodayTopicTitle>{title}</TodayTopicTitle>
      </TodayTopic>
      <TopicTextBox>
        <Emoji>
          {isEmojiClicked ? (
            <div onClick={handleEmojiClicked}>{selectEmoji} </div>
          ) : (
            <img src={selectEmoji} onClick={handleEmojiClicked} alt="Emoji" />
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
        <TopicTitle>{title}</TopicTitle>
        <BorderLine />
        <TopicText>{text}</TopicText>
        <Writer>글쓴이 | Xingu </Writer>
      </TopicTextBox>
      <BottomContainer>
        <ScrapBtn onClick={handleScrapClicked}>
          <ScrapImgs src={isScrapClicked ? ScrapImg : UnScrapImg} alt="Scrap" />
          스크랩 하기
        </ScrapBtn>
        <CloseBtn onClick={handleClose}>닫기</CloseBtn>
      </BottomContainer>
    </Main>
  );
}
