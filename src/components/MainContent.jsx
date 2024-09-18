import React from "react";
import CheckListItem from "./CheckListItem";

const MainContent = () => {
  let toDoList = [
    { label: "Work", text: "Work" },
    { label: "Read a Book", text: "Read A Book" },
    { label: "GoToGym", text: "Go To Gym" },
  ];
  let mappingToDoList = toDoList.map(({ label, text }) => (
    <CheckListItem label={label} text={text} />
  ));
  return <>{mappingToDoList}</>;
};
export default MainContent;
