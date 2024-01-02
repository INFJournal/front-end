import React,{useState} from "react";
import {Essay, LikeButton,JbDivisionLine,ScrapImgs,LikeImgs} from "./EssayRandomList.style";
import Header from "../../components/HeaderList/MainBackHeader";
import UnScrapImg from "../../img/UnScrap.png";
import ScrapImg from "../../img/Scrap.png";
import UnlikeImg from "../../img/Heart.png";

export default function EssayList() {
    const data=[1,2,3,4,5]
    let [scrap]=useState(Array(data.length).fill(0));
    let [like]=useState(Array(data.length).fill(0));



    return(
        <div>
            <Header />
            {/* <ScrEs>
                <TopicBox>그 날의 토픽</TopicBox>
                <Topic>"그 날의 명언"</Topic>
                    <div style={{ position: "absolute", left: "16%",top:"7cm",fontWeight:"bold"}}>
                        {`🔖`} 
                    </div>
                    <div style={{  position: "absolute", right: "17%",top:"7.2cm", fontSize:"11px"}}>
                        글쓴이 | ㅇㅇ
                    </div>
            </ScrEs> */}
            <JbDivisionLine/>
        {data.map(function(item,index){
          return(
            <Essay key={index}>
                <h4 style={{ fontSize: "13px", margin: "-5px 0 0 -30px", textAlign: "left" }}>{`"그날의 명언 ${item}"`}</h4>
                <div style={{ position: "absolute", top: "0", right: "0",marginRight:"10px"}}>

                  <LikeImgs src={ like[index]? "❤️" :UnlikeImg} alt="like" />
                  <ScrapImgs src={ scrap[index]? ScrapImg :UnScrapImg} alt="Scrap" />
              </div>
              <LikeButton>{item}</LikeButton>
            </Essay>
          );
        })}
      </div>
    );
}