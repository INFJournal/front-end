import React,{useState} from "react";
import {Essay, LikeButton,ScrEs,TopicBox,Topic,JbDivisionLine} from "./EssayRandomList.style";
import Header from "../../components/HeaderList/MainBackHeader";

export default function EssayList() {
    const data=[1,2,3,4,5]
    let [scrap]=useState(Array(data.length).fill(0));
    let [like]=useState(Array(data.length).fill(0));



    return(
        <div>
            <Header />
            <ScrEs>
                <TopicBox>그 날의 토픽</TopicBox>
                <Topic>"그 날의 명언"</Topic>
                    <div style={{ position: "absolute", left: "16%",top:"7cm",fontWeight:"bold"}}>
                        {`🔖`} 
                    </div>
                    <div style={{ position: "absolute", right: "17%",top:"7.2cm", fontSize:"11px"}}>
                        글쓴이 | ㅇㅇ
                    </div>
            </ScrEs>
            <JbDivisionLine/>
        {data.map(function(id,index){
          return(
            <Essay key={index}>
                <h4 style={{ fontSize: "13px", margin: "-5px 0 0 -30px", textAlign: "left" }}>{`"그날의 명언 ${id}"`}</h4>
                <div style={{ position: "absolute", top: "0", right: "0",marginRight:"10px"}}>
                  <div style={{fontWeight:"bold", marginTop:"5px"}}>{`❤️${like[index]}🔖${like[index]}`} </div>
              </div>
              <LikeButton></LikeButton>
              {/* {like[index] && <EmojiBox data={data} index={index} />} */}
            </Essay>
          );
        })}
      </div>
    );
}