import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Essay,
  LikeButton,
  JbDivisionLine,
  ScrapImgs,
  LikeImgs
} from "./EssayRandomList.style";
import Header from "../../components/HeaderList/MainBackHeader";
import UnScrapImg from "../../img/UnScrap.png";
import ScrapImg from "../../img/Scrap.png";
import UnlikeImg from "../../img/Heart.png";

export default function EssayList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiEndpoint = `http://10.10.140.49:8080/api/me/inbox/essays`;

    axios
      .get(apiEndpoint, {
        headers: {
          Authorization: 4
        }
      })
      .then((response) => {
        console.log(response);
        setData(response.data.result);
      })
      .catch((error) => {
        console.error("데이터 가져오기 오류:", error);
      });
  }, []);

  const handleLookEssayBtnClick = (essay) => {
    navigate("/lookessay", {
      state: {
        topic: essay.topic,
        title: essay.title,
        content: essay.content
      }
    });
  };

  return (
    <div>
      <Header />
      <JbDivisionLine />
      {data.map((essay) => (
        <Essay key={essay.essayId}>
          <h4 style={{ fontSize: "13px", margin: "-5px 0 0 -30px", textAlign: "left" }}>{`"${essay.topic} ${essay.essayId}"`}</h4>
          <div style={{ position: "absolute", top: "0", right: "0", marginRight: "10px" }}>
            <LikeImgs src={essay.isLiked ? "❤️" : UnlikeImg} alt="like" />
            <ScrapImgs src={essay.isScraped ? ScrapImg : UnScrapImg} alt="Scrap" />
          </div>
          <LikeButton onClick={handleLookEssayBtnClick(essay)}>{essay.likeType}</LikeButton>
        </Essay>
      ))}
    </div>
  );
}
