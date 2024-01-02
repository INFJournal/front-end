import React from 'react'
import styled from "styled-components";

const TodayTopic =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: 3px solid #D5E4D8;
    width: 305px;
    height: 78px;
    margin : 111px 0 0 42px;
`

const TopicTitle= styled.div`
    font-weight: 700;
    font-size: 14px;
`

export default function LookEssay() {
  return (
    <div>
        <TodayTopic>
            <TopicTitle>"오늘의 토픽 들어갈 자리"</TopicTitle>
        </TodayTopic>
    </div>
  )
}
