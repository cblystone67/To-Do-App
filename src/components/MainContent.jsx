import React, { useState } from "react";
import CheckListItem from "./CheckListItem";

const MainContent = () => {
  let toDoList = [
    { label: "Work", text: "Work", checked: true },
    { label: "ReadABook", text: "Read A Book", checked: false },
    { label: "GoToGym", text: "Go To Gym", checked: false },
  ];
  const [checkedItems, setCheckedItems] = useState(toDoList);
  const [inputValue, setInputValue] = useState("");

  const handleUserClick = (e) => {
    const newList = checkedItems.map((item) => {
      console.log("Target name", e.target.name);
      console.log("Label name", item.label);
      if (e.target.name === item.label) {
        item.checked = !item.checked;
      }
      return item;
    });
    console.log("This is the new list", newList);
    setCheckedItems(newList);
  };
  const handleAddItem = () => {
    const newItem = {
      label: inputValue,
      text: inputValue,
      checked: false,
    };
    const newList = [...checkedItems, newItem];
    setCheckedItems(newList);
    setInputValue("");
  };
  let mappingToDoList = checkedItems.map(({ label, text, checked }) => (
    <CheckListItem
      handleUserClick={handleUserClick}
      label={label}
      text={text}
      checked={checked}
    />
  ));
  return (
    <>
      {mappingToDoList}
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        name="addItem"
        value={inputValue}
      ></input>
      <button onClick={() => handleAddItem()}>Submit</button>
    </>
  );
};
export default MainContent;
