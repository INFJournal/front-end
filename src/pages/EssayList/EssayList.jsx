import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Essay,
  LikeButton,
  WriteBtn,
  EmojiCon,
  ScrapImgs,
} from "./EssayList.style";
import Header from "../../components/HeaderList/EssayListHeader";
import ScrapImg from "../../img/Scrap.png";

export default function EssayList() {
  const [data, setData] = useState([]);
  const [like, setLikeBtn] = useState(Array(data.length).fill(false));
  const [scrap, setScrap] = useState(Array(data.length).fill(0));
  const [likesum, setLikeSum] = useState(Array(data.length).fill(0));
  const userId = localStorage.getItem("userId");
  const apiUrl = process.env.REACT_APP_API_URL;

  const likeBtnOn = (index) => {
    let likeCnt = [...like];
    likeCnt[index] = !likeCnt[index];
    setLikeBtn(likeCnt);
  };

  useEffect(() => {
    const apiEndpoint = `${apiUrl}/api/me/essays`;
    axios
      .get(apiEndpoint, {
        headers: {
          Authorization: userId,
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data); // Assuming response.data is an array
      })
      .catch((error) => {
        console.error("데이터 가져오기 오류:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Essay>
        <h4
          style={{
            fontSize: "13px",
            margin: "0 0 0px -30px",
            textAlign: "left",
          }}
        >
          예술은 과연 무엇일까
        </h4>
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            marginRight: "10px",
          }}
        >
          <div style={{ fontWeight: "bold", marginTop: "5px" }}></div>
          <ScrapImgs src={ScrapImg} />
        </div>
      </Essay>
    </div>
  );
}
