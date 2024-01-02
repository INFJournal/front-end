import React,{useState} from "react";
import { Essay,LikeButton } from "./EssayList.style";



export default function EssayList() {
  const data=[1,2,3,4,5]
  //const [button,setButton]=useState('likebtn');
  let [like,setlikebtn]=useState(Array(data.length).fill(0));

  const likebtnOn=(index)=>{
    let likeCnt=[...like];
    likeCnt[index]++;
    setlikebtn(likeCnt);
  };


    return (
      data.map(function(id,index){
        return(
          <Essay key={id}>
              <h4 style={{ fontSize: "13px", margin: "0 0 0 0", textAlign: "left" }}>{`"오늘의 명언 ${id}"`}</h4>
              <div style={{ position: "absolute", top: "0", right: "0",marginRight:"10px"}}>
                <div style={{fontWeight:"bold"}}>{`❤️${like[index]}🔖`} </div>
            </div>
            <LikeButton onClick={() => likebtnOn(index)}>🥰</LikeButton>
          </Essay>
        );
      })

    );
    
  }