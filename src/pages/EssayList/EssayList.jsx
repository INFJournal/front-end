import React,{useState} from "react";
import { Essay,LikeButton,WriteBtn,EmojiCon } from "./EssayList.style";



export default function EssayList() {
  const data=[1,2,3,4,5]
  let [like,setlikebtn]=useState(Array(data.length).fill(false));
  let [scrap]=useState(Array(data.length).fill(0));
  let [likesum]=useState(Array(data.length).fill(0));

  const likebtnOn = (index) => {
    let likeCnt = [...like];
    likeCnt[index] = !likeCnt[index]; // 토글 로직 수정
    setlikebtn(likeCnt);
  };



    return (
    <div>
      <WriteBtn onClick="location.href=">+ 새 글 쓰기</WriteBtn>

      {data.map(function(id,index){
        return(
          <Essay key={id}>
              <h4 style={{ fontSize: "13px", margin: "0 0 0px -30px", textAlign: "left" }}>{`"오늘의 명언 ${id}"`}</h4>
              <div style={{ position: "absolute", top: "0", right: "0",marginRight:"10px"}}>
                <div style={{fontWeight:"bold", marginTop:"5px"}}>{`❤️${likesum[index]}🔖${scrap[index]}`} </div>
            </div>
            <LikeButton onClick={() => likebtnOn(index)}>🥰</LikeButton>
            {like[index] && <EmojiBox data={data} index={index} />}
          </Essay>
        );
      })}
    </div>
  );
}

  function EmojiBox({ data, index }){
    let [sad]=useState(Array(data.length).fill(0));
    let [angry]=useState(Array(data.length).fill(0));
    let [shocked]=useState(Array(data.length).fill(0));
    let [heart]=useState(Array(data.length).fill(0));
    return(
      <EmojiCon >{`😭${sad[index]}🤬${angry[index]}🫢${shocked[index]}🥰${heart[index]}`}</EmojiCon>
    )
  }