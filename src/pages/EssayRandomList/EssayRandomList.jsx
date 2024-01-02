import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Essay,
  LikeButton,
  JbDivisionLine,
  ScrapImgs,
  LikeImgs,
} from "./EssayRandomList.style";
import Header from "../../components/HeaderList/MainBackHeader";
import UnScrapImg from "../../img/UnScrap.png";
import ScrapImg from "../../img/Scrap.png";
import UnlikeImg from "../../img/Heart.png";

export default function EssayList() {
  //const data=[1,2,3,4,5]
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState();
  const [isWritten, setIsWritten] = useState();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const apiEndpoint = `http://3.38.178.117/api/me/inbox/essays`;
    console.log(userId);
    axios
      .get(apiEndpoint, {
        headers: {
          Authorization: userId,
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data.result);
        setTopic(response.data.result.topic);
        //setIsWritten(response.data.result.isWritten);
      })
      .catch((error) => {
        console.error("데이터 가져오기 오류:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <JbDivisionLine />
      {data.map((essay) => (
        <Essay key={essay.essayId}>
          <h4
            style={{
              fontSize: "13px",
              margin: "-5px 0 0 -30px",
              textAlign: "left",
            }}
          >
            스스로 의식하지 못하는 행복이 가능한가?
          </h4>
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              marginRight: "10px",
            }}
          >
            <LikeImgs src={UnlikeImg} alt="like" />
            <ScrapImgs src={ScrapImg} alt="Scrap" />
          </div>
        </Essay>
      ))}
    </div>
  );
}
