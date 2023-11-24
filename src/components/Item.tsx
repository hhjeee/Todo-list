import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDone } from "react-icons/md";

import ItemProps from "interface/ItemProps";

function TodoItem({ id, text, done, edit, remove }: ItemProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDone = () => {
    setIsChecked(!isChecked);
    done && done(id);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEditedText(editedText);
    setIsEditing(!isEditing);
    handleNewText(id, editedText);
  };
  const handleNewText = (id: number, text: string) => {
    edit && edit(id, text);
  };

  const handleDelete = () => {
    remove && remove(id);
  };

  return (
    <BigContainer done={isChecked}>
      <Checking done={isChecked} onClick={handleDone}>
        <MdDone className="checkIcon" />
      </Checking>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <EditInput type="text" value={editedText} onChange={handleInput} />
        </form>
      ) : (
        <Text done={isChecked}>{text}</Text>
      )}
      <Editing onClick={handleEditToggle}>
        <FaRegEdit />
      </Editing>
      <Deleting onClick={handleDelete}>
        <RiDeleteBinLine />
      </Deleting>
    </BigContainer>
  );
}

export default TodoItem;

const BigContainer = styled.div<{ done: boolean }>`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  ${(props) =>
    props.done &&
    css`
      color: gray;
    `}
`;
const EditInput = styled.input`
  width: 215px;
  height: 30px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid black;
  margin-right: 10px;
  outline: none;
`;
const Text = styled.div<{ done: boolean }>`
  width: 220px;
  font-size: 18px;
  margin-right: 10px;
  ${(props) =>
    props.done &&
    css`
      text-decoration-line: line-through;
    `}
`;
const Checking = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 2px solid black;
  margin-right: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  .checkIcon {
    display: none;
  }

  ${(props) =>
    props.done &&
    css`
      border: 2px solid gray;

      .checkIcon {
        display: block;
      }
    `}
`;
const Editing = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const Deleting = styled.div`
  display: flex;
  align-items: center;
`;
