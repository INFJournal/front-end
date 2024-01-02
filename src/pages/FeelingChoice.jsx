import React from "react";
import styled from "styled-components";

const FeelingChoiceWrap = styled.div`
  margin-left: 63px;
  margin-top: 250px;
`;

const Greeting = styled.div`
  margin-left: -20px;
  margin-top: 250px;
  > p {
    font-weight: bolder;
    font-size: 24px;
  }
`;

const Feelings = styled.div`
  margin-left: -20px;
  margin-top: 60px;
  > div {
    display: flex;
    > div {
      background-color: #d5e4d8;
      border-radius: 15px;
      border: 1px solid #3e864d;
      width: 90px;
      height: 30px;
      margin-right: 10px;
      margin-bottom: 10px;
      > p {
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: bolder;
        font-size: 12px;
        padding: 5px;
      }
    }
  }
`;

const Line = styled.div`
  margin-left: 55px;
`;

const NextBtn = styled.div`
  margin-top: 260px;
  margin-left: -15px;

  align-items: center;
  justify-content: center;
  > button {
    border-radius: 10px;
    background-color: #3e864d;
    border: 0;
    outline: 0;
    padding: 20px;
    padding-left: 120px;
    padding-right: 120px;
    color: white;
  }
`;
export default function FeelingChoice() {
  return (
    <FeelingChoiceWrap>
      <Greeting>
        <p>
          인프제님, <br /> 오늘의 기분은 어떠신가요?
        </p>
      </Greeting>
      <Feelings>
        <Line>
          <div>
            <p>기분 좋음</p>
          </div>
          <div>
            <p>기분</p>
          </div>
        </Line>
        <div>
          <div>
            <p>즐거움</p>
          </div>
          <div>
            <p>기분 좋음</p>
          </div>
          <div>
            <p>기분 좋음</p>
          </div>
        </div>
        <Line>
          <div>
            <p>기분 좋음</p>
          </div>
          <div>
            <p>기분 좋음</p>
          </div>
        </Line>
      </Feelings>
      <NextBtn>
        <button>다음으로</button>
      </NextBtn>
    </FeelingChoiceWrap>
  );
}
