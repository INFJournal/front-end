import React,{useState} from "react";
import {Essay, LikeButton,ScrEs,TopicBox,Topic,JbDivisionLine} from "./EssayRandomList.style";

export default function EssayList() {
    const data=[1,2,3,4,5]

    return(
        <div>
            <ScrEs>
                <TopicBox>그 날의 토픽</TopicBox>
                <Topic>그 날의 명언</Topic>
                <div style={{ position: "absolute", left: "16%",top:"5.7cm",fontWeight:"bold"}}>
                    {`🔖`} 
                    </div>
            </ScrEs>
            <JbDivisionLine/>
        {data.map(function(id,index){
          return(
            <Essay key={id}>
                <h4 style={{ fontSize: "13px", margin: "0 0 0px -30px", textAlign: "left" }}>{`"오늘의 명언 ${id}"`}</h4>
                <div style={{ position: "absolute", top: "0", right: "0",marginRight:"10px"}}>
                  <div style={{fontWeight:"bold", marginTop:"5px"}}>{`❤️🔖`} </div>
              </div>
              <LikeButton></LikeButton>
              {/* {like[index] && <EmojiBox data={data} index={index} />} */}
            </Essay>
          );
        })}
      </div>
    );
}