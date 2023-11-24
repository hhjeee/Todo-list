import React from "react";
import styled from "styled-components";

function TodoDate() {
  return (
    <BigContainer>
      <h1 className="date">{getDate()}</h1>
      <div className="day">{getDay()}</div>
    </BigContainer>
  );
}

export default TodoDate;

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const realDate = date.getDate();
  return year + "년 " + month + "월 " + realDate + "일";
}
function getDay() {
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const date = new Date();
  const day = week[date.getDay()];
  return day;
}

const BigContainer = styled.div`
  align-items: center;
  justify-content: center;

  width: 312px;
  height: 500px;
  padding-right: 100px;
  border-right: 2px solid black;

  .date {
    font-size: 25px;
    text-align: start;
    margin: 0;
    margin-top: 20px;
    padding-left: 50px;
  }
  .day {
    font-size: 20px;
    color: gray;
    margin-top: 10px;
    padding-left: 50px;
  }

  @media (max-width: 767px) {
    border: none;
    border-bottom: 2px solid black;
    padding: 0;
    height: 100px;
    margin: auto;
  }
`;
