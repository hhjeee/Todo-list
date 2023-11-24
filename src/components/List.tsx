import React, { useState } from "react";
import styled from "styled-components";

import TodoItem from "./Item";
import ItemProps from "interface/ItemProps";

function TodoList() {
  const [todos, setTodos] = useState<ItemProps[]>([]);
  const [input, setInput] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo();
  };

  const addTodo = () => {
    const newTodo: ItemProps = {
      id: Date.now(),
      text: input,
      checked: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id: number) => {
    setTodos((items) => items.filter((item) => item.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleEdit = (id: number, newText: string) => {
    setTodos((items) =>
      items.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  return (
    <BigContainer>
      <div className="left">
        할 일 {todos.filter((item) => !item.checked).length}개 남음
      </div>
      <form onSubmit={handleSubmit}>
        <TodoInput
          type="text"
          placeholder="할 일을 입력하세요"
          value={input}
          onChange={handleInput}
        />
      </form>
      <TodoContainer>
        {todos.map((item: ItemProps) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            checked={item.checked}
            done={handleDone}
            edit={handleEdit}
            remove={deleteTodo}
          />
        ))}
      </TodoContainer>
    </BigContainer>
  );
}

export default TodoList;

const BigContainer = styled.div`
  height: 500px;
  padding: 0 50px;
  overflow-y: auto;

  .left {
    font-size: 18px;
    text-align: center;
    color: gray;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 767px) {
    padding: 0;
    margin: auto;
  }
`;

const TodoInput = styled.input`
  width: 300px;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  padding-left: 10px;
  outline: none;

  @media (max-width: 767px) {
    width: 250px;
  }
`;

const TodoContainer = styled.div`
  margin: auto;
`;
