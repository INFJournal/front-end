import React, { useState, useEffect } from "react";
import axios from "axios";
import { Essay, LikeButton, WriteBtn, EmojiCon, ScrapImgs } from "./EssayList.style";
import Header from "../../components/HeaderList/EssayListHeader";
import ScrapImg from "../../img/Scrap.png";

export default function EssayList() {
  const [data, setData] = useState([]);
  const [like, setLikeBtn] = useState(Array(data.length).fill(false));
  const [scrap, setScrap] = useState(Array(data.length).fill(0));
  const [likesum, setLikeSum] = useState(Array(data.length).fill(0));

  const likeBtnOn = (index) => {
    let likeCnt = [...like];
    likeCnt[index] = !likeCnt[index];
    setLikeBtn(likeCnt);
  };

  useEffect(() => {
    // 사용자 ID를 어떻게 가져올지에 따라 수정이 필요합니다.
    const userId = "your_user_id";

    // API 엔드포인트를 실제 엔드포인트로 교체
    const apiEndpoint = `http://10.10.140.49:8080/api/me/essays`;

    axios
      .get(apiEndpoint, {
        headers: {
          Authorization: 4,
        },
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("데이터 가져오기 오류:", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <WriteBtn onClick={() => (window.location.href = "+ 새 글 쓰기")}>
        + 새 글 쓰기
      </WriteBtn>

      {data.map(function (item, index) {
        return (
          <Essay key={index}>
            <h4 style={{ fontSize: "13px", margin: "0 0 0px -30px", textAlign: "left" }}>{`"오늘의 명언 ${item.id}"`}</h4>
            <div style={{ position: "absolute", top: "0", right: "0", marginRight: "10px" }}>
              <div style={{ fontWeight: "bold", marginTop: "5px" }}>{`❤️${item.likesum}`}</div>
              <ScrapImgs src={ScrapImg} />{`${item.scrap}`}
            </div>
            <LikeButton onClick={() => likeBtnOn(index)}>🥰</LikeButton>
            {like[index] && <EmojiBox item={item} />}
          </Essay>
        );
      })}
    </div>
  );
}

function EmojiBox({ item }) {
    // let [sad]=useState(Array(data.length).fill(0));
    // let [angry]=useState(Array(data.length).fill(0));
    // let [shocked]=useState(Array(data.length).fill(0));
    // let [heart]=useState(Array(data.length).fill(0));
  return (
    <EmojiCon>{`😭${item.sad}🤬${item.angry}🫢${item.shocked}🥰${item.heart}`}</EmojiCon>
  );
}

