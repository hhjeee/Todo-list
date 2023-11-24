import React from "react";
//import { useState, useRef, ChangeEvent } from "react";
//import { create } from 'zustand';
import styled from "styled-components";

import TodoDate from "components/Date";
import TodoList from "components/List";

export default function MainTodo() {
  return (
    <BigContainer>
      <h1>📝 Todo-List 📝</h1>
      <SmallContainer>
        <TodoDate />
        <TodoList />
      </SmallContainer>
    </BigContainer>
  );
}

const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  h1 {
    margin-bottom: 50px;
    text-align: center;
  }
  @media (max-width: 767px) {
    display: block;
    margin: auto;
    h1 {
      margin-top: 50px;
    }
  }
`;
const SmallContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    display: block;
    margin: auto;
  }
`;
